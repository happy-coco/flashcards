import React from "react";
import { useSelector } from "react-redux";
// import selectors
import { selectTopics } from "./topicsSlice";
import { selectQuizzes } from "../quizzes/quizzesSlice";
import { Link, useParams, Navigate } from "react-router-dom";
import ROUTES from "../../app/routes";

export default function Topic() {
  const topics = useSelector(selectTopics); // use selector for topics 
  const quizzes = useSelector(selectQuizzes); // use selector for quizzes 
  const { topicId } = useParams();
  const topic = topics[topicId];

  if(!topic) {
    return <Navigate to={ROUTES.topicsRoute()} replace/>
  }

  const quizzesForTopic = topic.quizIds.map((quizId) => quizzes[quizId]);
  
  return (
    <section>
      <img src={topic.icon} alt="" className="topic-icon" />
      <h1>{topic.name}</h1>
      <ul className="quizzes-list">
        {quizzesForTopic.map((quiz) => (
          <li className="quiz" key={quiz.id}>
            <Link to={ROUTES.quizRoute(quiz.id)}>{quiz.name}</Link>
          </li>
        ))}
      </ul>
      <Link to="/quizzes/new" className="button center">
        Create a New Quiz
      </Link>
    </section>
  );
}
