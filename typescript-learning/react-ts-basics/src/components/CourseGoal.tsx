import { type ReactNode, type FC } from 'react';
// import { type PropsWithChildren } from 'react';

interface CourseGoalProps {
  id: number;
  title: string;
  children: ReactNode;
  onDelete: (id: number) => void;
}

// Another process for passing props as children, below and bove in the imports
// type CourseGoalProps = PropsWithChildren<{ title: string }>;

// Normal Javascript function below
function CourseGoal({ title, id, children, onDelete }: CourseGoalProps) {
  return (
    <article>
      <div>
        <h2>{title}</h2>
        <p>{children}</p>
      </div>
      <button onClick={() => onDelete(id)}>Delete</button>
    </article>
  );
}

// Functional component below using Typescript

// const CourseGoal: FC<CourseGoalProps> = ({ title, children }) => {
//     return (
//         <article>
//             <div>
//                 <h2>{title}</h2>
//                 <p>{children}</p>
//             </div>
//             <button>Delete</button>
//         </article>
//     );
// }

export default CourseGoal;
