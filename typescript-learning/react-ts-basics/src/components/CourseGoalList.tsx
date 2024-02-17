import CourseGoal from './CourseGoal.tsx';
import { type CourseGoal as CGoal } from '../App.tsx';

// below you've set up an interface of expected props, an array of objects in the shape of below,
// notice the angle brackets left after the the expected object
interface GoalListProps {
  goals: CGoal[];
  onDeleteGoal: (id: number) => void;
}

export default function CourseGoalList({ goals, onDeleteGoal }: GoalListProps) {
  return (
    <ul>
      {goals.map((goal) => (
        <li key={goal.id}>
          <CourseGoal id={goal.id} title={goal.title} onDelete={onDeleteGoal}>
            <p>{goal.description}</p>
          </CourseGoal>
        </li>
      ))}
    </ul>
  );
}
