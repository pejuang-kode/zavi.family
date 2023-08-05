---
title: React Frameworks
description: Using Remix and Next.js interchangeably as React Frameworks for Zavi Family apps.
---

Using Remix and Next.js interchangeably as React Frameworks for Zavi Family apps. {% .lead %}

## Considerations

I have been using Remix for my open-source projects since they opened the source code publicly in 2021. For example, [Kelas Rumah Berbagi](https://kelas.rumahberbagi.com/), [Senarai](https://senar.ai), and [Kawal Masjid](https://kawalmasj.id). Therefore, naturally, I wanted to use Remix as React Framework for my Zavi Family apps.

### History with Remix, Deno, and Prisma

I started feeling that I had pushed Remix too far in the wrong direction. Trying to live on the edge of the Remix ecosystem slowed me down significantly. For instance, [I could not integrate Prisma into Senarai](https://github.com/senar-ai/web/issues/30) because I deployed Remix to Deno Deploy, which led me to host [beta.senar.ai](https://beta.senar.ai) separately in [Vercel](https://vercel.com) to allow me to use Prisma.

Later on, [Prisma started supporting the Deno runtime](https://github.com/senar-ai/web/issues/30#issuecomment-1295548850). However, I have lost my momentum and interest in pushing it further because I already had [beta.senar.ai](https://beta.senar.ai) running on the side.

### Remix Streaming Exploration

In my [Menyongsong Transisi Web](https://zainf.dev/belajar-6) talk, I explored how to use Remix streaming. At that time, Next.js' streaming feature was still in beta, while it was already available as a stable version in Remix. It seemed that Remix had advanced faster than Next.js on this side.

However, Remix's streaming feature also came with caveats. Quoting from their official [Streaming](https://remix.run/docs/en/1.19.2/guides/streaming) documentation,

> NOTE: Deferred UX goals rely on streaming responses. Some popular hosts do not support streaming responses. In general, any bare metal / VM provider will support streaming. Make sure your hosting platform supports before using this API.

The most straightforward VM provider I could find is [Fly.io](https://fly.io/). However, I have never succeeded in setting it up so far. For instance, I tried setting it up for [Kelas Rumah Berbagi](https://kelas.rumahberbagi.com/) but failed to get it to work with [Planetscale](https://planetscale.com/). That's how I ended up deploying it on [Vercel](https://vercel.com) again.

Yes, [Vercel supports Remix streaming](https://vercel.com/docs/frameworks/remix#streaming) now, but I have lost interest in exploring Remix Streaming further in favor of a bigger unaddressed problem in Remix: [Partial Hydration](https://github.com/remix-run/remix/discussions/680). At least, that's the impression I got from this [Understanding React Server Components](https://vercel.com/blog/understanding-react-server-components) article. But for now, let's set aside all the nuances of what React Server Components could do for partial hydrations. We will get back to it later.

### Epic Stack Short Trial

When I watched [The Epic Stack](https://www.epicweb.dev/epic-stack) talk in Remix Conf 2023, I was intrigued by its idea and principles. Hence I started [this now-archived repository](https://github.com/zainfathoni/zavi.family) using it. However, when I tried running the project locally, I bumped into specific technical issues. I guess it's not entirely ready yet, and we cannot simply hope it works out of the box.

It got me thinking. Since I have also built many web apps in the past five years, as I shared in my [Navigating The Web in A World Full of Constraints](https://zainf.dev/web-constraints-recording) talk, I would like to explore whether I could build something similar. This is what made me get started with this Zavi Family project. I want something I can reuse reliably whenever I want to create a new project without losing momentum due to decision fatigue.

### Partial Hydration

Let's revisit the [Partial Hydration](https://github.com/remix-run/remix/discussions/680) problems in Remix. Through his [React Server Components and Remix](https://remix.run/blog/react-server-components) article, Ryan, Remix's co-founder, didn't think React Server Components bring much into the table, even with the partial hydration promises.

While taking his opinions with a grain of salts, I tried comparing the Lighthouse scores of a few web apps whose stacks I know.

{% figure src="/images/senar-ai-lighthouse.png" alt="Lighthouse scores of senar.ai, a Remix app deployed on Deno Deploy with static JSON assets" caption="Lighthouse scores of senar.ai, a Remix app deployed on Deno Deploy with static JSON assets" /%}
{% figure src="/images/beta-senar-ai-lighthouse.png" alt="Lighthouse scores of beta.senar.ai, a Remix app deployed on Vercel with MySQL database hosted on PlanetScale" caption="Lighthouse scores of beta.senar.ai, a Remix app deployed on Vercel with MySQL database hosted on PlanetScale" /%}
{% figure src="/images/veri-ferdiansyah-blog-lighthouse.png" alt="Lighthouse scores of Veri Ferdiansyah's blog, a Next.js 13 static web app deployed on Vercel with React Server Components to allow partial hydrations" caption="Lighthouse scores of Veri Ferdiansyah's blog, a Next.js 13 static web app deployed on Vercel with React Server Components to allow partial hydrations" /%}

> I picked Veri Ferdiansyah's blog because he [recently announced it on LinkedIn](https://www.linkedin.com/posts/vferdiansyah_improve-1-everyday-veri-ferdiansyah-activity-7092346558284779520-da2D?utm_source=share&utm_medium=member_desktop) and it got my attention. Go check it out, I think there will be more insightful content on it. 😁

From the screenshots above, you can see that there are no significant differences between them.

The point is, no matter what tech stack you are using, you will probably be fine. So just optimise on the speed of product value delivery.

### Reconsidering Next.js 13

The last time I built an app using Next.js was in 2021, when I built [WargaBantuWarga](https://www.wargabantuwarga.com). It was before Remix went open source. Since Remix went open source, I have never given Next.js another try. I think it's probably the time for me to give it another try while pushing its boundaries.

Especially with all the Tailwind UI templates built in Next.js. I'm a big fan of Tailwind UI, I have been using it for building [Kelas Rumah Berbagi](https://kelas.rumahberbagi.com/) and [Senarai](https://senar.ai). And recently, I just spawn this documentation website in less than an hour by utilising [Tailwind UI's Syntax documentation template](https://tailwindui.com/templates/syntax). It felt so good delivering stuffs quickly without the hassle of making decisions and stitching things up! 🎉

## Decisions

### Using Remix and Next.js interchangeably

In this monorepo, I will use either Remix or Next.js, based on the fastest path to value delivery.

### Clean Architecture

When certain patterns emerge, I would extract them into separate package in the monorepo to allow reusability. I will dig deeper into it in another decision document.

### Living on The Edge

Don't get me wrong. I'm still excited to live on the bleeding edge. But we have to gauge how much we can afford to "bleed". Hence, making good trade-offs is an important part of the decision-making process.
