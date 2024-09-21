import React from "react";
import { useSelector } from "react-redux";
// import quiz selector
import { selectQuizzes } from "./quizzesSlice";
import { Link, useParams, Navigate } from "react-router-dom";
import Card from "../cards/Card";
import ROUTES from "../../app/routes";

export default function Quiz() {
  const quizzes = useSelector(selectQuizzes); // call to selector to get all the quizzes in state
  const { quizId } = useParams();
  const quiz = quizzes[quizId];

  if(!quiz) {
    return <Navigate to={ROUTES.quizzesRoute()} replace/>
  }

  return (
    <section>
      <h1>{quiz.name}</h1>
      <ul className="cards-list">
        {quiz.cardIds.map((id) => (
          <Card key={id} id={id} />
        ))}
      </ul>
      <Link to={ROUTES.newQuizRoute()} className="button center">
        Create a New Quiz
      </Link>
    </section>
  );
}
