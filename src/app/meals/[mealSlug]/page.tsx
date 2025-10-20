type MealDetailsPageProps = {
  params: {
    mealSlug: string;
  };
};

export default async function MealDetailsPage({
  params,
}: MealDetailsPageProps) {
  const { mealSlug } = await params;
  return (
    <main>
      <h1>Meal Details</h1>
      <p>{mealSlug}</p>
    </main>
  );
}
