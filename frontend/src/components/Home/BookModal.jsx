import React from "react";
import { PiBookOpenTextLight } from "react-icons/pi";
import { BiUserCircle } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";

const BookModal = ({ book, onClose }) => {
  return (
    <div
      className="fixed bg-black bg-opacity-60 top-0 right-0 bottom-0 left-0 z-50 flex justify-center items-center"
      onClick={onClose}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="w-[600px] max-w-full min-h-[400px] bg-white rounded-xl p-4 m-10 flex flex-col relative"
      >
        <AiOutlineClose
          className="right-6 top-6 text-3xl text-red-600 cursor-pointer ml-auto hover:opacity-50"
          onClick={onClose}
        />
        <h2 className="w-fit px-4 py-1 bg-red-300 rounded-lg">
          {book.publishedYear}
        </h2>
        <h4 className="my-2 text-gray-500">{book._id.slice(0, 20)}...</h4>
        <div className="flex justify-start items-center gap-x-2">
          <PiBookOpenTextLight className="text-red-300 text-2xl" />
          <h2 className="my-1">{book.title}</h2>
        </div>
        <div className="flex justify-start items-center gap-x-2">
          <BiUserCircle className="text-red-300 text-2xl" />
          <h2 className="my-1">{book.author}</h2>
        </div>
        <p className="mt-4">Anything you want to show</p>
        <p className="my-2">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vel soluta
          consequuntur quisquam architecto non. Corrupti alias similique a
          voluptatum hic rerum officiis repellendus consequuntur at culpa.
          Doloremque error dolor reiciendis? Vero cumque eaque expedita aperiam
          accusantium labore, quibusdam, quod distinctio tempore fuga sit culpa
          sequi! Velit, fuga reprehenderit nemo aut rem sint dolore, quas
          laborum, aliquam ipsam sit enim cupiditate mollitia ad cumque illo
          voluptas doloremque ab libero! Officiis architecto sed cum mollitia
          maiores. Facilis reprehenderit in unde sint? Ipsam modi sunt libero
          accusamus architecto perspiciatis commodi nulla quasi ea, impedit ad
          expedita tenetur! Laudantium deserunt corporis beatae nesciunt veniam!
        </p>
      </div>
    </div>
  );
};

export default BookModal;
