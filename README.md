# Rails Twitter Clone

A Ruby on Rails application for creating and managing short posts (tweets). The project demonstrates server-rendered CRUD workflows, model-level content validation, and a responsive interface.

## Features

- Create, list, view, edit, and delete posts.
- Validate that post content is present and between 1 and 140 characters.
- Display validation feedback when submitted content is invalid.
- Use a simple Twitter-inspired interface with shared navigation and layout.
- Persist posts in a relational database.

## Technology

- Ruby 3.3.0
- Ruby on Rails 7.1.3
- SQLite3
- HTML, ERB, CSS, and JavaScript
- Importmap and Rails asset pipeline

## Run locally

### Prerequisites

Install Ruby 3.3.0, Bundler, and SQLite3.

### Setup

```bash
git clone https://github.com/Osmanabasskay/rails-twitter-clone.git
cd rails-twitter-clone
bundle install
bin/rails db:prepare
bin/rails server
```

Open http://localhost:3000.

If the repository does not include an executable `bin/rails` script, use `rails db:prepare` and `rails server` after installing the Rails dependencies.

## Main routes

| Method | Path | Purpose |
|---|---|---|
| GET | / | List posts |
| GET | /posts/new | Display the new-post form |
| POST | /posts | Create a post |
| GET | /posts/:id | View a post |
| GET | /posts/:id/edit | Display the edit form |
| PATCH/PUT | /posts/:id | Update a post |
| DELETE | /posts/:id | Delete a post |

## Project structure

- `app/controllers/posts_controller.rb`: post CRUD actions
- `app/models/post.rb`: post model and validation
- `app/views/posts/`: index, show, new, and edit views
- `app/views/layouts/application.html.erb`: shared application layout
- `db/migrate/`: database schema migration

## Current scope

This is a focused CRUD application, not a full social network. It does not currently provide user accounts, follows, likes, comments, direct messages, or a production social feed.

## Deployment

A live demo is not currently configured. A deployment should be added only after the production database, environment variables, asset build, and hosting configuration have been verified.

## License

See the repository for licensing information.
