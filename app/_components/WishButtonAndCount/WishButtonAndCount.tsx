import WishButton from "./WishButton/WishButton";

function WishButtonAndCount({ isFavorite = false, wishCount }: { isFavorite: boolean; wishCount: number }) {
  return (
    <div className="flex items-center justify-center gap-2">
      <WishButton isFavorite={isFavorite} />
      <p className="text-xl">{wishCount}</p>
    </div>
  );
}

export default WishButtonAndCount;
