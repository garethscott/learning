import CourseGoal from './CourseGoal.tsx';

// below you've set up an interface of expected props, an array of objects in the shape of below, 
// notice the angle brackets left after the the expected object
interface GoalListProps {
    goals: {
        title: string;
        description: string;
        id: number;
      }[];
}

export default function GoalList({ goals }: GoalListProps) {
    return (
      <ul>
        {goals.map((goal) => (
          <li key={goal.id}>
            <CourseGoal title={goal.title}>
              <p>{goal.description}</p>
            </CourseGoal>
          </li>
        ))}
      </ul>
    );
}
