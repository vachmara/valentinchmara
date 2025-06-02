---
title: "How you can earn money thanks to Open Source"
description: A personal journey through open-source contributions, bounties and real-world projects, how I improved my skills and got paid along the way.
date: 2025-05-20
image: /05-20-2025-thumbnail.png
minRead: 10
author:
  name: Valentin Chmara
  avatar:
    src: https://valentinchmara.com/avatar.png
    alt: Valentin Chmara
---

## Introduction

I've always loved the world of open source, collaborating with other developers, diving into real-world problems, and contributing to projects that matter. But here's something many people don't realize: **you can actually earn money by contributing to open source**.

In this post, I'll walk you through the different ways open source can reward you financially, share my own experience contributing to a few projects, and give you a behind-the-scenes look at my most **[recent contribution that earned me a $150 bounty](/blog/how-you-can-earn-money-thanks-to-open-source#case-study-fixing-oramas-exact-true-bug-150-bounty)**. If you've ever thought "I'd love to contribute, but I need to focus on paid work," this might change your mind.

---

## The many ways open source pays

### Bounties on Issues

Platforms like [Algora](https://algora.io) let open source maintainers post cash rewards for solving specific problems. You can browse issues, filter by tech stack or payout amount, and claim a task to work on. It's freelancing, but with full transparency and community impact.

### Sponsorships

Once you gain traction, you can receive direct support through [GitHub Sponsors](https://github.com/sponsors), [OpenCollective](https://opencollective.com), or even individual backers who appreciate your work. Maintainers with strong reputations often generate recurring income just from keeping their projects alive and improving.

### Freelance work & job offers

Your public contributions act like a living résumé. You can leverage your experience through PRs and reach out for freelance projects that matched the exact tech you used in OSS. It eventually become the best inbound marketing you can do as a developer.

### Monetizing your own OSS

If you're building something from scratch, you can still keep it open source and monetize via:
- **Open core** (core is free, advanced features are paid)
- **Dual licensing**
- **Paid cloud hosting**
- **Extensions/add-ons marketplaces**

It's been a long time since I started to build a big OSS project, even if I know a startup is a full-time job, I still think that the best way to learn is to build something. And if you can make money while doing it, even better.

---

## My OSS track record

Over the years, I've contributed to a growing list of open source projects. From documentation improvements to bug fixes and feature additions, I've learned a ton and built track record I'm proud of.

**You can see a full history of my contributions here:** 
- [https://prs.valentinchmara.com](https://prs.valentinchmara.com)

Projects include:
- Company like [Cal.com](https://cal.com)
- TypeScript packages
- Front-end frameworks
---

## Case Study – Fixing Orama's `exact: true` Bug (💵 $150 bounty)

One of my most recent contributions involved a bounty posted on [Orama](https://github.com/oramasearch/orama), a blazing fast full-text search engine in TypeScript.

The issue:  
👉 [Exact match not working as expected](https://github.com/oramasearch/orama/issues/866)  
The fix:  
👉 [My pull request](https://github.com/oramasearch/orama/pull/941)

### Why I picked this issue

- The scope was clearly defined and focused on a single behavior (`exact: true`).
- The reward was fair given the expected effort.
- The tech stack (TypeScript, radix trees, tokenizer logic) matched my interests and strengths.
- I was curious to understand how exact string matching works under the hood in a full-text search engine.
- Interestingly, several people had previously dismissed the issue as "not a bug", which made it more appealing. I saw it as a chance to approach the problem with a **business-first mindset** rather than a strictly technical one.

### Reproducing the bug

The issue reporter included a [minimal reproduction on CodeSandbox](https://codesandbox.io/p/sandbox/lvy7mc), which made the debugging process incredibly smooth. I was able to see the unexpected behavior immediately: enabling `exact: true` was returning one result when it shouldn't have returned one.

After verifying the issue, I cloned the Orama repository locally. Following the README and contributing guidelines, I set up the monorepo and explored the structure. At the root, I checked the `package.json` and noticed the project uses [Turborepo](https://turborepo.com/) for managing multiple packages, very clean and well-structured.

I then focused on understanding how the search engine processes queries in `exact` mode. I read the documentation, particularly [this section on exact match](https://docs.orama.com/open-source/usage/search/introduction#exact-match), to make sure my expectations were aligned with intended behavior.

### Understand what's going on

Below is the reproduction code that was provided in the issue:
```ts
const db = create({
  schema: {
    path: "string",
    title: "string",
  },
});

insert(db, { path: "First Note.md", title: "First Note" });
insert(db, { path: "Second Note.md", title: "Second Note" });

const noExact = search(db, {
  term: "first",
  properties: ["path"],
}); 
const withExact = search(db, {
  term: "first",
  properties: ["path"],
  exact: true,
}); 

console.log("noExact path", noExact); // 1 result returned, 1 expected => GOOD
console.log("withExact path", withExact); // 1 result returned, but none was expected => BAD
```

I tracked the `exact` parameter through the codebase:
- The core logic lived in the [`search-fulltext.ts`](https://github.com/oramasearch/orama/blob/main/packages/orama/src/methods/search-fulltext.ts) file.
- This file called into the lower-level search function defined in[`components/index.ts`](https://github.com/oramasearch/orama/blob/main/packages/orama/src/components/index.ts), which uses a radix tree for fast token lookups.

By analyzing this flow, I learned that:
- The `term` was being tokenized in the `components/index.ts` file.
- The radix tree was used to look for matching tokens.
- However, `exact: true` only ensured token exactness, **not** property-level exactness.

If we take our reproduction example. The `noExact` search tokenization is `["first"]`. 
And the `withExact` search tokenization is also `["first"]`.

So it is correct that the `exact: true` search returns the same result as the `noExact` search. The real problem is more on the usage of a text search engine.

We need to ask ourselves: *What the user expects when they set `exact: true`?*

In this case, the user expects to get the exact match of the string "first" in the property "path".

### Crafting the fix

Now that we understood the problem, we needed to ensure that the search engine would return the exact match of the string "first" in the property "path".
A strict string comparison would be needed when `exact: true` is set.

I proposed a solution that:
1. Keep the current token-level matching.  
2. Rename the internal `exact` flag to something more explicit (e.g. `exactToken`;).  
3. Apply the **public** `exact` option only when comparing the *entire* property value to the *entire* normalised term.

As of right now, this PR is still open, don't hesitate to check and comment on it if you have any suggestions.

Tools I used:
- **VS Code** for dev
- **Tap and C8** to run the tests
- **Copilot agent mode** to brainstorm solutions and validate understanding
- **Algora** to track bounty progress
- **GitHub** for PR and issue management

### Time breakdown

| Phase                        | Time Spent | Notes                                 |
|-----------------------------|------------|----------------------------------------|
| Triaging & environment setup| ~1h        | Repo setup, running tests              |
| Debugging & writing the fix | ~3h        | Reading code, implementing solution    |
| PR polish & communication   | ~1h        | Writing description, test coverage     |

### What I learned

- Got deeper into how search engines tokenize and compare inputs.
- Improved my test-driven workflow. (Learn new libraries like `tap` and `c8`)
- Practiced communicating clearly with maintainers in an async, open environment.

### Next steps 


| Task | Owner | Status |
|------|-------|--------|
| Benchmark new `exact` logic against existing suite | Me | Pending after maintainer feedback |
| Prototype index-based optimisation (avoid full scan) | Me | Researching |
| Update docs (`exact` flag semantics) | Me / Maintainer | - |
| Final review & merge | Maintainer | - |
| Post-merge blog update + Changelog entry | Me | - |

---

## A repeatable bounty-hunting workflow

If you're thinking of jumping in, here's a workflow that worked for me:

1. **Pick an issue** that matches your tech skills.
2. **Validate scope** by reading the repo and any linked code/tests/CI/CD etc.
3. **Work on it**: clone the repo, set up your environment, and start coding.
4. **Stay focused**: write small, test-driven commits.
5. **Write a great PR**: explain your thought process, link to the issue, and keep it clean.
6. **Celebrate!** And don't forget to update your portfolio.

> Sometimes you need to tell on the issue that you are working on it, even if most of the time, it's not needed you can just push your PR that fixes the issue.
---

## Why OSS makes you a better developer

Every OSS contribution I've made helped me:
- Write better code with fewer assumptions.
- Learn how large, well-structured repos are maintained.
- Practice real collaboration and async communication.
- Build a visible portfolio that could get me hired.

It's the ultimate blend of learning, reputation-building, and side income.

---

## Resources & Next Steps

- 💼 My contributions: [https://prs.valentinchmara.com](https://prs.valentinchmara.com)
- 🏹 My Algora profile: [https://algora.io/vachmara](https://algora.io/vachmara/profile)
- 🚀 Good first bounty list: [https://goodfirstissue.dev](https://goodfirstissue.dev)

---

## Conclusion

Open source isn't just about giving-it's about growing. You can learn, collaborate, and yes, even **get paid** for writing great code in public. If you're passionate about development, pick one bounty this week. Fix it. Submit it.

You'll come out a better engineer-and maybe with coffee money (or more) in your pocket.

---

_Thanks for reading! Feel free to share your own OSS bounty stories with me on [X](https://x.com/ValentinChmara)._ ✌️
