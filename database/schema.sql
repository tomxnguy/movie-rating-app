set client_min_messages to warning;

-- DANGER: this is NOT how to do it in the real world.
-- `drop schema` INSTANTLY ERASES EVERYTHING.
drop schema "public" cascade;

create schema "public";

create table "public"."users"(
  "userId" serial,
  "username" text not null,
  "password" text not null check (length(username) >= 3),
  "createdAt" timestampz(6) not null default now(),
  "updatedAt" timestampz(6) not null default now(),
)

create table "public"."movies" (
  "movieId"      serial,
  "title"        text           not null,
  "summary"      text           not null,
  "imdbLink"     text           not null,
  "rating"    integer  CHECK (rating BETWEEN 1 and 5),
  primary key ("movieId")
);
