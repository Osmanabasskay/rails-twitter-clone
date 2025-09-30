# TwitterClone

A professional TwitterClone application built with Ruby on Rails that meets all academic requirements.

## Features

✅ **Ruby on Rails Application** - Built with Rails 7.1.3  
✅ **Professional Frontend** - Clean HTML/CSS with header and footer  
✅ **Full CRUD Operations** - Create, Read, Update, Delete tweets  
✅ **Character Validation** - Tweets must be 1-140 characters  
✅ **Error Handling** - Validation messages for empty content and character limits  
✅ **Posts Table** - Uses 'posts' table with 'content' column  
✅ **Responsive Design** - Mobile-friendly interface  
✅ **Real-time Character Counter** - JavaScript-powered character counting  

## Requirements Met

- ✅ Must be an application using Ruby on Rails
- ✅ Create a minimal front part (header, footer) using HTML and CSS
- ✅ Ability to post, edit, list, and delete tweets
- ✅ Only tweet 1 to 140 characters
- ✅ Error messages for empty content or >140 characters
- ✅ Use posts as the table name for tweets
- ✅ Posts table has only content column (id and timestamps auto-generated)

## Tech Stack

- **Ruby**: 3.3.0
- **Rails**: 7.1.3
- **Database**: SQLite3 (for easy setup)
- **Frontend**: HTML5, CSS3, JavaScript
- **Styling**: Custom CSS with Twitter-inspired design

## Installation & Setup

### Prerequisites
- Ruby 3.3.0 or higher
- Rails 7.1.3 or higher
- SQLite3

### Quick Start

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd Dpro_Tweet-Application_Assignment_8-main
   ```

2. **Install dependencies**
   ```bash
   bundle install
   ```

3. **Setup database**
   ```bash
   rails db:create
   rails db:migrate
   ```

4. **Start the server**
   ```bash
   rails server
   ```

5. **Visit the application**
   Open your browser and go to `http://localhost:3000`

### Alternative Setup with Docker

1. **Build and run with Docker**
   ```bash
   docker build -t twitterclone .
   docker run -p 3000:3000 twitterclone
   ```

## Usage

### Creating a Tweet
1. Click "New Tweet" in the navigation
2. Type your message (1-140 characters)
3. Watch the character counter update in real-time
4. Click "Tweet" to post

### Managing Tweets
- **View**: Click "View" to see individual tweets
- **Edit**: Click "Edit" to modify existing tweets
- **Delete**: Click "Delete" to remove tweets (with confirmation)

### Validation Features
- **Empty Content**: Shows error if tweet is empty
- **Character Limit**: Shows error if tweet exceeds 140 characters
- **Real-time Counter**: JavaScript counter shows current character count
- **Visual Feedback**: Counter changes color as you approach the limit

## Project Structure

```
├── app/
│   ├── controllers/
│   │   ├── application_controller.rb
│   │   └── posts_controller.rb
│   ├── models/
│   │   ├── application_record.rb
│   │   └── post.rb
│   ├── views/
│   │   ├── layouts/
│   │   │   └── application.html.erb
│   │   └── posts/
│   │       ├── index.html.erb
│   │       ├── new.html.erb
│   │       ├── edit.html.erb
│   │       └── show.html.erb
│   └── assets/
│       └── stylesheets/
│           └── application.css
├── config/
│   ├── application.rb
│   ├── database.yml
│   ├── routes.rb
│   └── environments/
├── db/
│   └── migrate/
│       └── 20241230000001_create_posts.rb
└── public/
```

## Database Schema

### Posts Table
```sql
CREATE TABLE posts (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  content TEXT NOT NULL,
  created_at DATETIME NOT NULL,
  updated_at DATETIME NOT NULL
);
```

## API Endpoints

| Method | Path | Action | Description |
|--------|------|--------|-------------|
| GET | / | posts#index | List all tweets |
| GET | /posts | posts#index | List all tweets |
| GET | /posts/new | posts#new | New tweet form |
| POST | /posts | posts#create | Create tweet |
| GET | /posts/:id | posts#show | Show tweet |
| GET | /posts/:id/edit | posts#edit | Edit tweet form |
| PATCH/PUT | /posts/:id | posts#update | Update tweet |
| DELETE | /posts/:id | posts#destroy | Delete tweet |

## Testing

The application includes comprehensive validation testing:

1. **Empty Content Test**: Try submitting an empty tweet
2. **Character Limit Test**: Try submitting a tweet with >140 characters
3. **CRUD Operations**: Test all create, read, update, delete operations
4. **Responsive Design**: Test on different screen sizes

## Contributing

This is an academic assignment. For educational purposes only.

## License

This project is created for academic assignment purposes.
