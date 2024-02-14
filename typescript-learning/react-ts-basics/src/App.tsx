import { useState } from 'react';
import Header from './components/Header.tsx';
import GoalList from './components/GoalList.tsx';
import goalsImage from './assets/goals.jpg';

type CourseGoal = {
  title: string;
  description: string;
  id: number;
};

export default function App() {
  // The line below the state has been set to an array of CourseGoal types
  const [goals, setGoals] = useState<CourseGoal[]>([]);

  const handleAddGoal = () => {
    // If your new state relys on the old state then you need to use the prevGoals function when updating state
    setGoals(prevGoals => {
      const newGoal: CourseGoal = {
         title: 'Learn React + TS',
         description: 'Learn it in depth!',
         id: Math.random()
      };

      return [...prevGoals, newGoal]
    });
  };

  return (
    <main>
      <Header image={{ src: goalsImage, alt: 'A list of goals'}}>
        <h1>Your Course Goals</h1>
      </Header>
      <button onClick={handleAddGoal}>Add Goal</button>
      <GoalList goals={goals} />
    </main>
  );
}
