#Future implementation plan

- nodemailer- email templates
- job board - create a job board where companies can post job openings and users can apply for them. This will include features such as job search, filtering, and application tracking.
- dashboard - create a dashboard for users to manage their profiles, view their activity, and access exclusive content. This will include features such as notifications, saved games, and personalized recommendations.
- authentication - see is use auth0 or something similar for authentication and user management. This will allow users to create accounts, log in, and manage their profiles.
- user profiles - allow users to create and customize their profiles and apply for jobs. This will include features such as pdf upload, bios, and social media links.

## packages to use

- nodemailer - for sending emails, such as account verification and password reset emails.
- auth0 or similar - for authentication and user management, providing a secure and scalable solution for handling user accounts and authentication.
- nuxt-auth - for integrating authentication into the Nuxt application, allowing for easy management of user sessions and access control.
- nuxt-ui - for building the user interface of the application, providing a set of pre-designed components and styles to create a cohesive and visually appealing design.
- nuxt-hub - for managing the application's state and data, allowing for efficient data fetching and caching, as well as providing a centralized store for managing application state.

## considerations

- security - ensure that user data is protected and that the application is secure against common vulnerabilities such as cross-site scripting (XSS) and SQL injection.
- use Cloudflare workers and d1 + auth0 or self-hosted supabase instance for authentication and database management?
- should we use an r2 bucket or a self-hosted solution for file storage? or just use the filesystem for now and migrate to a cloud storage solution later?
