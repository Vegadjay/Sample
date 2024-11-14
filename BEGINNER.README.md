# YTHUBSTARTUP 🚀

A modern platform for discovering and sharing startup content. YTHUBSTARTUP serves as a hub where users can post and read about new startups, fostering innovation and entrepreneurship.

## 🌟 Features

- Browse latest startup posts
- Read detailed startup information
- Modern and responsive design
- Rich content management with Sanity CMS
- Fast and optimized performance

## 🛠️ Technology Stack

- **Frontend**: Next.js
- **Authentication**: NextAuth
- **Styling**: Tailwind CSS
- **CMS**: Sanity.io
- **Package Manager**: npm

## 📝 Prerequisites

Before you begin, ensure you have:
- Node.js installed (version 14 or higher)
- npm (Node Package Manager)
- A Sanity account
- Git installed (for version control)

## ⚙️ Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/ythubstartup.git
cd ythubstartup
```

2. Install dependencies:
```bash
npm install
```

3. Environment Setup:
   - Copy `.env.example` to `.env.local`
   - Create a project on [Sanity.io](https://www.sanity.io/)
   - Get your Sanity project credentials
   - Update the `.env.local` file with your Sanity credentials:
```env
NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id
NEXT_PUBLIC_SANITY_DATASET=production
NEXT_PUBLIC_SANITY_API_VERSION=your_api_version
```

4. Start the development server:
```bash
npm run dev
```

Your application should now be running on `http://localhost:3000`

## 🌐 Sanity Studio Setup

1. Navigate to the Sanity studio directory:
```bash
cd studio
```

2. Deploy Sanity Studio:
```bash
npx sanity deploy
```

## 📦 Project Structure

```
ythubstartup/
├── components/     # React components
├── pages/         # Next.js pages
├── public/        # Static files
├── styles/        # CSS and Tailwind styles
├── lib/           # Utility functions
├── studio/        # Sanity Studio files
└── ...
```

## 🚀 Deployment

The project can be deployed using platforms like:
- Vercel (recommended for Next.js)
- Netlify
- Heroku

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📞 Support

For support, email [techwithall77@gmail.com] or open an issue in the repository.