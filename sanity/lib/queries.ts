import { defineQuery } from "next-sanity";

export const STARTUP_QUERIES = defineQuery(`*[_type == "startup" && slug.current != null && 
    (!defined($search) || category match $search || title match $search || author->name match $search)]
    | order(_createdAt desc) {
    _id,
    title,
    slug,
    _createdAt,
    author -> {
      _id, name, bio, profilePicture
    },
    views,
    description,
    category,
    image,
    pitch
}`);


export const STARTUP_ID_QUERY = defineQuery(`
  *[_type == "startup" && _id == $id][0]{
    _id,
    title,
    slug,
    _createdAt,
    author -> {
      _id, name, username, bio, profilePicture
    },
    views,
    description,
    category,
    image,
    pitch
  }
`)


export const STARTUP_VIEWS_QUERYS = defineQuery(
  `*[_type == "startup" && _id == $id][0]{
    _id,views
  }`
)

export const AUTHOR_BY_GITHUB = defineQuery(
  `*[_type == "author" && id == $id][0] {
  _id,
  id,
  name,
  username,
  email,
  profilPicture,
  bio
  }`
)