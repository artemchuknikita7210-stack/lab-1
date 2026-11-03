type Resource = {
  id: number;
  title: string;
  minutes: number;
};

const resources: Resource[] = [
  { id: 1, title: "Вступ до Git", minutes: 10 },
  { id: 2, title: "Основи JavaScript", minutes: 20 },
  { id: 3, title: "Типи в TypeScript", minutes: 30 },
];

function selectResources(items: Resource[], maxMinutes: number): Resource[] {
  return items.filter((item) => item.minutes <= maxMinutes);
}

const upTo20 = selectResources(resources, 20);
console.log(upTo20);
console.log(upTo20.length);

const upTo0 = selectResources(resources, 0);
console.log(upTo0);
console.log(upTo0.length);
