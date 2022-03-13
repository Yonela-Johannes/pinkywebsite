import {
    collection,
    doc,
    onSnapshot,
    orderBy,
    query,
  } from "@firebase/firestore";
  import { useEffect, useState } from "react";
  import { useRecoilState } from "recoil";
  import { modalState } from "../../atoms/modalAtom";
  import Modal from "../../Components/Modal";

  import Post from "../../Components/Post/Post";
//   import { db } from "../firebase";
  import { ArrowLeftIcon } from "@heroicons/react/solid";
  import Comments from "../../Components/Post/Comments";

function PostPage(props) {
    const {user, admin } = props
  return (
    <div><Comments user={user} /></div>
  )
}

export default PostPage