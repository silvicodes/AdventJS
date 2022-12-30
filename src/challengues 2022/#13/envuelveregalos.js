export default function wrapGifts(gifts) {
  let box = ["*" + "*".repeat(gifts[0].length) + "*"];

  gifts.map((gift) => {
    box.push("*" + gift + "*");
  });

  box.push(box[0]);
  return box;
}
