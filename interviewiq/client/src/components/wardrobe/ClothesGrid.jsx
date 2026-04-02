import ClothesCard from "./ClothesCard";

export default function ClothesGrid({ clothes = [], remove }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {clothes.map(item => (
        <ClothesCard key={item._id} item={item} remove={remove} />
      ))}
    </div>
  );
}
