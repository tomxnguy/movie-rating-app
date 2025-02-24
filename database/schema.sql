set client_min_messages to warning;

-- DANGER: this is NOT how to do it in the real world.
-- `drop schema` INSTANTLY ERASES EVERYTHING.
drop schema "public" cascade;

create schema "public";

create table "movies" (
  "movieId"      serial,
  "title"        text           not null,
  "summary"      text           not null,
  "imdbLink"     text           not null,
  "rating"    integer  CHECK (rating BETWEEN 1 and 5),
  primary key ("movieId")
);
