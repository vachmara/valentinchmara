---
title: "Solving interactive video popup challenges with WebAssembly and performance driven engineering"
description: "A deep dive into the technical challenges of building an injected video popup SDK, achieving 10:1 compression ratios with WebAssembly and solving cross-domain communication with performance for optimal client satisfaction."
date: 2025-06-09
image: /06-09-2025.png
minRead: 11
author:
  name: Valentin Chmara
  avatar:
    src: https://valentinchmara.com/avatar.png
    alt: Valentin Chmara
---

## Executive Summary

Interactive video popups can significantly boost user engagement, but they pose serious performance challenges in modern web browsers. When building for [Vendeo.io](https://vendeo.io)'s injected video popup SDK, I encountered critical technical hurdles that required innovative solutions to ensure optimal client satisfaction and performance.

**Key Achievements:**
- **10:1 video compression ratio** (100MB → 10MB) with no perceptible quality loss
- **Client-side processing** eliminating server infrastructure complexity
- **Cross-domain iframe communication** enabling seamless third-party integration
- **Sub-second response times** for widget interactions

This article details the technical challenges I faced and the performance-oriented solutions that satisfied [Vendeo](https://vendeo.io) clients' needs for fast, reliable video popup integration.

---

## The core technical challenges

### Challenge 1: Massive video file performance impact

**The Problem:**
Raw video files exceeding 50-100MB can cause severe performance degradation on client websites. If we load these files in web popups, the resulte can be:
- Sluggish page behavior
- Poor user experience
- High bandwidth consumption
- Frustrated end users

**Client impact:**
Website owners can be hesitant to implement video popups due to performance concerns, directly affecting adoption rates and customer satisfaction.

### Challenge 2: Seamless third-party integration

**The problem:**
Creating a video popup system that could be embedded on any website via a simple `<script>` tag while:
- Avoiding CSS/JS conflicts with host pages
- Maintaining dynamic control over popup state
- Ensuring secure cross-domain communication
- Supporting various responsive and customization options
- Not impacting the host page's performance, size or bandwidth

**Client impact:**
Complex integration processes would have been a major barrier to adoption for non-technical clients.

---

## Technical solution 1: Client-side video compression with WebAssembly

### Why WebAssembly?

I leveraged [**WebAssembly (WASM)**](https://webassembly.org/) to run [FFmpeg directly in the browser](https://ffmpegwasm.netlify.app/), enabling powerful video processing without server infrastructure. 

**Technical implementation:**

```javascript
// Core compression workflow
const ffmpeg = createFFmpeg({ /* ... */ });
await ffmpeg.load();                        // Load FFmpeg WASM module

ffmpeg.FS('writeFile', 'input.mp4', inputData);  // Write input to memory
await ffmpeg.run(...ffmpegArgs);                 // Execute compression
const outputData = ffmpeg.FS('readFile', 'output.mp4'); // Read compressed output
```

### Optimized FFmpeg configuration

I developed a precisely tuned FFmpeg command to achieve optimal compression after extensive testing with various parameters. The goal was to reduce file size while maintaining acceptable quality for popup displays.

```bash
ffmpeg -i input.mp4 -c:v libx264 -preset medium -crf 23 -pix_fmt yuv420p \
       -color_primaries bt709 -color_trc bt709 -colorspace bt709 \
       -c:a aac -strict experimental -b:a 192k -vf scale=398:-2 output.mp4
```

**Key technical decisions:**

| Parameter | Value | Rationale |
|-----------|--------|-----------|
| **Codec** | H.264 (libx264) | Industry standard, universal browser support |
| **Preset** | Medium | Balance between compression speed and efficiency |
| **CRF** | 23 | Optimal quality-to-size ratio for popup displays |
| **Resolution** | 398px width | Perfectly sized for popup UI, maintains aspect ratio |
| **Audio** | AAC 192kbps | Preserves audio quality while reducing size |

### Performance results

**Compression performance:**
- **Average compression ratio:** ~10:1 (100MB → 10MB)
- **Processing time:** Seconds for typical marketing videos
- **Quality retention:** Visually indistinguishable in popup context
- **Memory efficiency:** 50MB upload limit prevents browser overload

**Client satisfaction impact:**
- **No impact on loading times** with compressed videos
- **Reduced bandwidth costs** for clients' end users and Vendeo
- **Improved user engagement** due to smooth playback
- **Zero server infrastructure** requirements for clients

---

## Technical Solution 2: Cross-Domain iframe communication architecture

### Iframe isolation strategy

I implemented an iframe-based architecture that provides both **isolation and integration**. The bundle is *lightweight*, ensuring *minimal impact* on host pages while allowing *dynamic interaction*.

**Architecture benefits:**
- **Complete isolation:** No CSS/JS conflicts with host pages
- **Central updates:** Widget improvements deployed instantly
- **Security:** Sandboxed execution environment
- **Flexibility:** Works on any website without modification

To ensure true isolation and zero performance impact on host sites, I inject the widget’s container `<div>` at the very end of the `<body>` only after the DOM is loaded wrap into an [IIFE](https://developer.mozilla.org/fr/docs/Glossary/IIFE). This guarantees our SDK is always loaded last, preserving all client page priorities.

```javascript
<script>
!function(){
  document.addEventListener("DOMContentLoaded",()=>{
    const e=document.createElement("div");
    e.id="vendeo-app",document.body.appendChild(e);
    const t=document.createElement("script");
    t.src="https://db.vendeo.io/storage/v1/object/public/scripts/latest.js";
    t.async=1;
    t.type="module";
    document.body.appendChild(t);
    window.vendeo_flow_id="${props.id}";
  })
}();
</script>
```

The SDK then mounts a **minimal [Vue 3](https://vuejs.org) app (≈40KB)** to manage all iframe logic and styling reactively. This approach ensures:
- Zero CSS/JS conflicts, full isolation via iframe.
- Maximum compatibility, z-index and sizing are dynamically computed, keeping the widget always visible and unobtrusive.
- No performance penalty, the widget loads only after the host page is fully interactive.

### [PostMessage](https://developer.mozilla.org/fr/docs/Web/API/Window/postMessage) communication protocol

**Technical implementation:**

```javascript
// Widget to parent communication
window.parent.postMessage({ 
    type: "widget", 
    action: "is_left", 
    value: true/false 
}, "*");

// Parent response handler
window.addEventListener("message", (event) => {
    if (event.data.type === "widget") {
        updateWidgetState(event.data.action, event.data.value);
    }
});
```

This protocol allows the widget to:
- **Receive dynamic state updates** from the host page
- **Send interaction events** back to the host
- **Maintain responsive UI** without blocking the main thread
- **Ensure secure communication** by validating message origins

---

## Conclusion: performance-driven client success

Building Vendeo's video popup product meant fighting real-world browser quirks, pushing the boundaries of what’s possible with WebAssembly and JavaScript, and always keeping the client experience front and center.

**Key Takeaways:**
- **WebAssembly unlocks real browser power:** Video transcoding in the client browser isn’t just "possible", it’s fast, reliable, and reduces backend costs to zero.
- **Late-loading and isolation are non-negotiable for 3rd-party widgets:** By injecting the SDK after DOMContentLoaded, then running Vue 3 inside an isolated iframe with the maximum safe `z-index: 2147483647`, I ensured universal compatibility and zero conflicts, tested on Chrome, Safari, Firefox, and Edge.
- **Performance trade-offs are about context:**  For popup video, users want *speed* and *reliability* more than pixel-perfect quality. Bandwidth savings and instant load matter far more than 4K resolution.
- **Obsessive integration simplicity = higher adoption:** By boiling integration down to a single script, I eliminated barriers for both technical and non-technical users.

### Personal note:

There were moments of frustration, like wrestling with browser memory limits and edge-case CORS bugs, but each challenge made the final product more robust. If you’re facing similar problems, know that the browser platform is far more capable than many engineers think. For example, [Supabase](https://supabase.com)'s team has released a [PostgreSQL in the browser](https://wasm.supabase.com/) that runs entirely in WebAssembly, proving that the limits of what’s possible are constantly being pushed.

---

*Want to discuss similar technical challenges or performance optimization strategies? Connect with me on [X](https://x.com/ValentinChmara) or check out the [Vendeo.io](https://vendeo.io) implementation.*
