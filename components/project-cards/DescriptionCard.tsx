export default function DescriptionCard({ title, description }: { title: string; description: string }) {
  return (
    <div className={"project-description-card"}>
      <h2 className={"project-title"}>{title}</h2>
      <p className={"project-description"}>{description}</p>
    </div>
  );
}
