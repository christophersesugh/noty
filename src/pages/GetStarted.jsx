import React from 'react';
import { Link } from 'react-router-dom';
import { IoMdArrowBack } from 'react-icons/io';

export default function GetStarted() {
  return (
    <div style={{ padding: '2rem' }}>
      <h2>Welcome to Noty</h2>
      <p>
        Noty is a simple note-taking application that allows you to quickly jot
        down ideas, edit your notes, and even use AI-powered corrections and
        speech features.
      </p>
      <br />
      <ul style={{ listStyle: 'numeric', margin: '1rem 0' }}>
        <li className="list__item">
          Use the <strong>Create Note</strong> page to add new notes quickly.
        </li>
        <li className="list__item">Tap on any note to edit or remove it.</li>
        <li className="list__item">
          Use the speech recognition feature to record spoken notes.
        </li>
        <li className="list__item">
          Listen to your notes read aloud with text-to-speech.
        </li>
      </ul>
      <p>Get started by creating your first note!</p>
      <Link to="/" className="btn add__btn">
        <IoMdArrowBack />
      </Link>
    </div>
  );
}
