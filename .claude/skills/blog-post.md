---
name: blog-post
description: Write SEO blog posts for brandhyve.com from a video transcript or keyword brief, in Brand Hyve's plain-spoken voice, and save them where the Agent OS SEO pipeline expects them.
user_invocable: true
---

# Brand Hyve blog post skill

This skill is run by the Agent OS SEO tab. Agent OS passes the target keyword, the file slug, the transcript, and the exact output path(s). Follow this file for everything else.

Adapted from the AIPB 5-site pipeline skill. Brand Hyve currently publishes to one site, so write one article per listed site (usually one).

## Step 0: Who we are (required context)

Brand Hyve is a marketing agency in Tampa, Florida that runs Local SEO and builds websites for local service businesses nationwide.

Audience: owners of local service and trades businesses (plumbing, HVAC, roofing, pet care, clinics, multi-location owners). They are busy, skeptical of agencies, and want more calls from Google.

Offers to reference naturally, never as a hard pitch:

- The Local 3 System: Google Business Profile optimization, reviews, and local rankings, aimed at winning three target cities per client. Public label: "Local SEO".
- Custom websites built to rank and convert for local service businesses.
- Every discovery call includes a free Local Visibility Snapshot: GBP standing, reviews, competitor comparison, and whether the client's industry and area are still open. In writing, theirs to keep.
- Exclusivity: one Local SEO client per industry per area. Mention it only when true and never as manufactured scarcity.

Rules from Avery:

- Do not publish prices in blog posts.
- Do not invent statistics, client results, testimonials, or review counts. Use a real number only if it is in the transcript. Otherwise describe the mechanism, not a made-up outcome.
- Named clients allowed for proof only when the transcript gives real detail: Kuma Plumbing and Drain, Grease Monkey, Millard Roofing, Parkerson's Heating-Air, Walk the Walk Professional Pet Care.
- Never lead with a generic "why Brand Hyve" pitch. Our differentiation is partnership after real discovery, so the post teaches first and offers a conversation second.

## Step 0.5: Brand voice

Plain-spoken and personal. Write like Avery explaining it to a business owner across the table. Local-first tone, nationwide reach.

Avery's own words on how we sell, use as the north star for tone:

> "Whether you decide to work with us or somebody else, at the end of the day all we care about is that you're taken care of and that it's affordable for you and your company. What you get that other agencies don't offer is a partner in your company's growth. We treat your goals as our own. You're not just a number."

Voice rules:

- US English (optimize, color, neighborhood).
- First person plural ("we", "our clients") for Brand Hyve. First person singular only when quoting the transcript speaker.
- Conversational, direct, no filler, no hype words, nothing cringe.
- Plain talk. Explain any SEO term the first time it appears.
- Open with the real worry the owner has, not with a definition.
- At most one hive or honeycomb phrase per post. Visuals carry the brand, not puns.
- Stories and concrete examples over abstractions.

## Step 0.6: Video library

Skipped for now. Embed only the video that the transcript came from, and only if Agent OS or the transcript gives you a YouTube ID. If no ID is given, write the post without a video embed and do not invent one.

Embed format when an ID exists:

```html
<iframe src="https://www.youtube.com/embed/VIDEO_ID" title="VIDEO TITLE" allowfullscreen loading="lazy"></iframe>
```

## Step 1: Inputs

Agent OS gives you the keyword, the slug, the transcript, and the output path(s). The transcript is the source of truth. Base every claim on it. If there is no transcript, write from well-established local SEO practice and say nothing specific about results.

## Step 2: Title and meta description

Treat the title like a headline that has to win the click.

Title formulas (pick the one that fits the content):

1. Specific number + result + timeframe.
2. Curiosity gap + contrast.
3. "How we" + result.
4. Bold claim + proof.
5. Question + payoff.

Title rules: 50 to 60 characters, keyword included naturally, no generic "Guide to X", no clickbait that the body cannot back up.

Meta description rules: 140 to 155 characters, lead with the payoff, keyword early, end with a specific hook.

## Step 3: Structure

- Keyword in the first sentence and in the last sentence.
- Keyword in at least two H2 or H3 headings, naturally.
- Clear H2 and H3 headers. Each heading is a full claim or question, not a fragment.
- 1,500 to 2,500 words of real sentences.
- A short "What to do this week" section with three to five concrete steps.
- An FAQ section with four to six questions using the keyword and related terms.
- One comparison table when the topic has two or more options (markdown table, complete thoughts in every cell).

## Step 4: Formatting rules

- Every complete sentence on its own line. Never a fragment on its own line.
- Lists use full sentences per bullet.
- Bold sparingly for the one phrase in a section the reader must not miss.
- Every URL wrapped in markdown link syntax. Bare URLs are not linked.

Quick test before saving: pick a random line. If it cannot stand alone as a sentence, rewrite it.

## Step 5: Calls to action

Four CTAs per post, placed after the opening, in the middle, before the FAQ, and at the end. Vary the wording and tie each to the section it follows. The destination is always the contact page.

- Main CTA: [Book a free 15-minute audit](https://www.brandhyve.com/contact). Mention the free Local Visibility Snapshot where it fits.
- Phone CTA: [Call (813) 308-0543](tel:+18133080543).
- Email CTA: [Email Info@brandhyve.com](mailto:Info@brandhyve.com).
- Service CTA: link to [Local SEO](https://www.brandhyve.com/seo) or [Websites](https://www.brandhyve.com/websites), whichever the post is about.

Standard closing block, always included:

```markdown
## Want us to look at your listing?

Every discovery call includes a free Local Visibility Snapshot: where your Google Business Profile stands, how your reviews compare, and whether your industry and area are still open with us.

[Book a free 15-minute audit](https://www.brandhyve.com/contact) or [call (813) 308-0543](tel:+18133080543).
```

## Step 6: Author block

End every post with this block, verbatim:

```markdown
## About Brand Hyve

Brand Hyve is a Tampa-based marketing agency that runs Local SEO and builds websites for local service businesses across the United States. We work with a small number of clients per industry and area and treat their growth goals as our own. [Learn how we work](https://www.brandhyve.com/) or [get in touch](https://www.brandhyve.com/contact).
```

## Step 7: Schema

The site template already emits Article schema from the front matter. Add FAQ schema only, inline at the end of the file, using the exact questions and answers from the FAQ section:

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    { "@type": "Question", "name": "QUESTION", "acceptedAnswer": { "@type": "Answer", "text": "ANSWER" } }
  ]
}
</script>
```

## Step 8: Front matter

The site's content schema requires these fields. Dates are YYYY-MM-DD.

```yaml
---
title: "Title, 50 to 60 characters, keyword included"
description: "Meta description, 140 to 155 characters, keyword early"
date: 2026-10-04
category: "Local SEO"
keywords: "target keyword, related term, related term"
author: "Brand Hyve"
---
```

`category` is one of: Local SEO, Google Reviews, Websites, Google Business Profile.

## Step 9: Internal links

Before writing, list the existing files in the posts folder Agent OS named. Link to two or three related existing posts by their slug (`/blog/<slug>/`) in a short "Related reading" list before the closing block. If there are no existing posts, skip the list.

## Step 10: Save

Write the finished Markdown to the exact path(s) Agent OS gave you with the Write tool. Do not run build or deploy commands. Agent OS handles deploy. When finished, print each path you wrote and its title.
