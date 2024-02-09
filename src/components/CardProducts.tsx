"use client";
import Button from "./Button";
import Card from "./Card";

const CardProducts = () => {
  return (
    <Card id="product" width="sm" shadow padding="sm">
      <div className="flex flex-col justify-start items-start gap-[15px]">
        <div className="rounded-lg ">
          <img
            src="https://picsum.photos/300/300"
            alt="Icon"
            className="w-full h-full rounded-lg"
          />
        </div>
        <div>
          <h1 className="font-bold text-[18px]">Title</h1>
          <p className="font-normal text-[16px]">Hola</p>
        </div>
        <Button
          id="button-1"
          type="primary"
          onClick={() => console.log("hola")}
          fullWidth
        >
          <p>Hola</p>
        </Button>
      </div>
    </Card>
  );
};

export default CardProducts;
