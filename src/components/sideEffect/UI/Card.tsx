import classes from "./Card.module.css";
type CardPropsType = {
  children: React.ReactNode;
  className?: string;
};
const Card = ({ children, className }: CardPropsType) => {
  return (
    <section className={`${classes.card} ${className ? className : ""}`}>
      {children}
    </section>
  );
};

export default Card;
