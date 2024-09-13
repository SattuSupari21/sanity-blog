# Sanity Blog

This repository contains the code for a blog built using [Sanity.io](https://www.sanity.io/) as the content management system (CMS) and a frontend built with Next.. The blog allows easy content creation and management with powerful features such as block content editing, tagging, and categorization.

## Features

- **CMS Integration**: Built with Sanity.io for rich content management.
- **Dynamic Content**: Fetches data dynamically via GROQ queries.
- **Categories and Tags**: Supports categorizing and tagging posts.
- **Block Content**: Leverages block content for rich text editing and flexible post layouts.
- **Responsive Design**: Designed to work on both mobile and desktop.

## Project Setup

To get this project running locally, follow these steps:

### Prerequisites

- **Node.js** (v14.x or later)
- **NPM** or **Yarn**
- **Sanity CLI** (for setting up and managing your Sanity Studio)

### Steps

1. **Clone the repository**

   ```bash
   git clone https://github.com/SattuSupari21/sanity-blog.git
   cd sanity-blog
   ```

1. **Install dependencies**

   If you're using npm:

   ```bash
   npm install
   ```

   If you're using yarn:

   ```bash
   yarn install
   ```

1. **Set up Sanity CMS**

   Navigate to the `sanity` folder:

   ```bash
   cd sanity
   ```

   Install Sanity dependencies:

   ```bash
   npm install
   ```

   Start Sanity Studio:

   ```bash
   sanity start
   ```

   Follow the instructions to link or create a new Sanity project.

1. **Run the project**

   Go back to the root directory:

   ```bash
   cd ..
   ```

   To run the project (frontend), use:

   ```bash
   npm run dev
   ```

   This will start the local development server.

1. **Environment Variables**

   Create a `.env` file in the root of the project to store your Sanity project ID and dataset:

   ```bash
   SANITY_PROJECT_ID=your_project_id
   SANITY_DATASET=your_dataset_name
   ```

---

## Folder Structure

The project is structured as follows:

```
sanity-blog/
├── sanity/               # Sanity Studio project folder
│   ├── schemas/          # Sanity schema definitions
│   ├── structure.js      # Custom desk structure for Sanity Studio
│   └── ...               # Other Sanity configuration files
├── app/                  # Next.js Frontend source code.
│   ├── index.js          # Home page listing blog posts
│   ├── posts/            # Dynamic routing for individual posts
│   │   └── [slug].js     # Page for displaying a single blog post
├── components/           # Reusable UI components
├── types/                # Typescript types for project.
│   ├── PostType.ts/      # Typescript type for blog post data.
├── utils/                # Utilities for project
│   ├── constants.ts      # Stores constant values
├── .env                  # Environment variables (not included in repo)
├── package.json          # Project dependencies and scripts
└── README.md             # Project documentation
```

---

## Features Breakdown

1. **Rich Content with Block Editor**: Sanity's block editor provides rich text editing features, allowing you to add images, videos, and custom components within your blog posts.

2. **Categories and Tags**: Posts can be easily categorized and tagged, improving search and navigation within the blog.

3. **Responsive Design**: The blog has a responsive design that works seamlessly across devices.

4. **Sanity Integration**: Fully integrated with Sanity.io to manage and fetch content dynamically via GROQ queries.

---

## Contributing

Feel free to contribute to this project by creating pull requests or submitting issues.

### Steps to Contribute

1. Fork the repository.
2. Create a new branch.
3. Make your changes and commit them.
4. Submit a pull request.
