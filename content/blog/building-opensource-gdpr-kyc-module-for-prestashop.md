---
title: "How AI tools doubled my delivery speed"
description: How a client project became an open source PrestaShop KYC module, and how modern AI tools like OpenAI Codex, CodeRabbitAI, and MCPs helped me deliver faster and better.
date: 2025-06-17
image: /06-17-2025-thumbnail.png
minRead: 5
author:
  name: Valentin Chmara
  avatar:
    src: https://valentinchmara.com/avatar.png
    alt: Valentin Chmara
---

## Executive summary

When a client requested a GDPR‑compliant KYC (Know Your Customer) module for a PrestaShop store, I proposed open sourcing the solution and leveraging modern AI development tools. That decision led to delivering **double the functionality** in the same timeframe, while producing cleaner, more secure code—ultimately benefiting both my client and the wider [PrestaShop](https://prestashop.com) ecosystem.

**Key outcomes:**
- Open‑source production‑ready KYC module
- Doubled delivery speed using AI tools
- Cleaner, peer‑auditable code with community‑sourced quality improvements

---

## From client need to community opportunity

Rather than delivering a proprietary module, I chose to open‑source the project—with this vision:
- Ensure transparency and stronger code quality
- Invite community feedback and contributions
- Create long‑term value for merchants and the PrestaShop ecosystem

Indeed, the module—now listed on [Packagist](https://packagist.org/packages/vachmara/pskyc)—helps merchants implement photo ID and address verification workflows while respecting GDPR protocols.

---

## Technical challenges

1. **Compliance:** Securely process sensitive documents (IDs, proof of address) in alignment with GDPR and AML guidelines—critical for use cases like jewelry or crypto storefronts.
2. **Rapid yet maintainable development:** Deliver core features quickly without introducing technical debt or compromising future extensibility.

---

## Solution 1: Open Sourcing for quality and community insight

By opening the code early:
- I maintained stricter documentation and transparent architectural decisions.
- The codebase stays open to peer review, bug reporting, and feature suggestions—bolstering trust and maintainability.
- Fully tested with PHPUnit, ensuring reliability and security with a coverage of **97%**.

---

## Solution 2: Leveraging cutting‑edge AI tools

To meet tight deadlines without sacrificing quality, I integrated three modern AI tools:

| Tool                    | Role                                                                                            | Outcome                                                                         |
| ----------------------- | ----------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------|
| [**OpenAI Codex**](https://openai.com/codex/)        | Fix, feature minor issues                                                                       | Reduced time spent on routine tasks and edge‑case handling                      |
| [**CodeRabbitAI**](https://www.coderabbit.ai/)        | Automated instant feedback and code review                                                      | Improved code consistency and parameter validation                              |
| [**Github MCP**](https://github.com/github/github-mcp-server)          | Get issues, files from Github directly on my IDE                                                | Optimized productivity by accessing project resources without context switching |

This workflow achieved a **2× increase** in delivery speed while maintaining high standards in code hygiene, documentation consistency, and security focus.

---

## Results and reflective insights

- **Client deliverable**: A polished, secure, GDPR‑compliant module ready for production.
- **Open source impact**: Early adopters can contribute, improve and use the module, enhancing its quality and longevity.
- **Process lesson**: Open sourcing legitimated the approach—by publishing early, accountability rose and community interest strengthened maintenance momentum.

---

## If you’re on the fence

Open sourcing client work may seem risky at first, but combined with AI‑accelerated development it becomes a powerful strategy. Transparency builds trust, AI builds efficiency—and together they create high‑quality, community‑driven software products.

---

*Want to discuss open source or AI-powered development? Connect with me on [X](https://x.com/ValentinChmara).*

