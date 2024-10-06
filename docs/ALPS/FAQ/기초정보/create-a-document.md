---
sidebar_position: 5
---

# 기초정보/서비스

Documents are **groups of pages** connected through:

# Deployment

To build the static files of your website for production, run:

```bash npm2yarn
npm run build
```


<details>

<summary>
  How many resources (money, person-hours, etc.) am I willing to invest in this?
</summary>

- 🔴 Self-hosting requires experience in networking as well as Linux and web server administration. It's the most difficult option, and would require the most time to manage successfully. Expense-wise, cloud services are almost never free, and purchasing/deploying an onsite server can be even more costly.
- 🟢 Jamstack providers can help you set up a working website in almost no time and offer features like server-side redirects that are easily configurable. Many providers offer generous build-time quotas even for free plans that you would almost never exceed. However, free plans have limits, and you would need to pay once you hit those limits. Check the pricing page of your provider for details.
- 🟡 The GitHub Pages deployment workflow can be tedious to set up. (Evidence: see the length of [Deploying to GitHub Pages](#deploying-to-github-pages)!) However, this service (including build and deployment) is always free for public repositories, and we have detailed instructions to help you make it work.

</details>

<details>

<summary>How much server-side customization do I need?</summary>

- 🟢 With self-hosting, you have access to the entire server's configuration. You can configure the virtual host to serve different content based on the request URL, you can do complicated server-side redirects, you can implement authentication, and so on. If you need a lot of server-side features, self-host your website.
- 🟡 Jamstack usually offers some server-side configuration (e.g. URL formatting (trailing slashes), server-side redirects, etc.).
- 🔴 GitHub Pages doesn't expose server-side configuration besides enforcing HTTPS and setting CNAME records.

</details>

<details>

<summary>Do I need collaboration-friendly deployment workflows?</summary>

- 🟡 Self-hosted services can leverage continuous deployment functionality like Netlify, but more heavy-lifting is involved. Usually, you would designate a specific person to manage the deployment, and the workflow wouldn't be very git-based as opposed to the other two options.
- 🟢 Netlify and Vercel have deploy previews for every pull request, which is useful for a team to review work before merging to production. You can also manage a team with different member access to the deployment.
- 🟡 GitHub Pages cannot do deploy previews in a non-convoluted way. One repo can only be associated with one site deployment. On the other hand, you can control who has write access to the site's deployment.

</details>