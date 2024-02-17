import { useState } from 'react';
import Header from './components/Header.tsx';
import CourseGoalList from './components/CourseGoalList.tsx';
import NewGoal from './components/NewGoal.tsx';
import goalsImage from './assets/goals.jpg';

export type CourseGoal = {
  title: string;
  description: string;
  id: number;
};

export default function App() {
  // The line below the state has been set to an array of CourseGoal types
  const [goals, setGoals] = useState<CourseGoal[]>([]);

  const handleAddGoal = (goal: string, summary: string) => {
    // If your new state relys on the old state then you need to use the prevGoals function when updating state
    setGoals((prevGoals) => {
      const newGoal: CourseGoal = {
        title: goal,
        description: summary,
        id: Math.random(),
      };

      return [...prevGoals, newGoal];
    });
  };

  const handleDeleteGoal = (id: number) => {
    setGoals((prevGoals) => prevGoals.filter((goal) => goal.id !== id));
  };

  return (
    <main>
      <Header image={{ src: goalsImage, alt: 'A list of goals' }}>
        <h1>Your Course Goals</h1>
      </Header>
      <NewGoal onAddGoal={handleAddGoal} />
      <CourseGoalList goals={goals} onDeleteGoal={handleDeleteGoal} />
    </main>
  );
}
