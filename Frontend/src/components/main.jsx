import { useEffect, useState } from "react";
import axios from "../utils/axios";
import { toast } from "react-toastify";

import Header from "./Header";
import Footer from "./Footer";

const Main = () => {
  const [trainData, setTrainData] = useState(null);
  const [numSeats, setNumSeats] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    const fetchTrainData = async () => {
      try {
        const { data } = await axios.get("/api/train");
        setTrainData(data.train);
      } catch (error) {
        console.error("Error fetching train data:", error);
      }
    };
    fetchTrainData();
  }, []);

  const handleBookSeats = async () => {
    try {
      const userData = JSON.parse(localStorage.getItem("user")) || { id: null };
      const { data } = await axios.post(
        "/api/train",
        { numSeats },
        {
          headers: {
            "user-id": userData.id,
          },
        }
      );

      switch (data.status) {
        case 200:
          toast.success(`Booked Seat No: ${data.seats.join(", ")}`, {
            position: "top-right",
            theme: "colored",
          });
          break;
        default:
          toast.error(data.message);
      }

      setNumSeats("");

      const { data: newData } = await axios.get("/api/train");
      setTrainData(newData.train);
    } catch (err) {
      console.error("Error booking seats:", err);
      alert(err.response.data.message);
    }
  };

  const resetPage = async () => {
    try {
      console.log("Entered try ")

      const key=prompt("Enter the key")

      if(key==5){
      const response = await axios.delete("/api/train");

      toast.success(`seats have been rest Sucessfully`, {
        position: "top-right",
        theme: "colored",
      });

      console.log(response)
      }

      else{
        toast.error(`key doesnt match`, {
          position: "top-right",
          theme: "colored",
        });

      }


      
    } catch (err) {
      console.error("Error booking seats:", err);
    }
  };

  const handleInputChange = (event) => {
    const inputValue = parseInt(event.target.value) || "";
    if (inputValue < 1 || inputValue > 7) {
      setErrorMessage("Seats should be booked in a range of 1 - 7");
      setNumSeats("");
    } else {
      setNumSeats(inputValue);
      setErrorMessage("");
    }
  };

  if (!trainData) {
    return <div>Loading...</div>;
  }

  return (
    <>
    <Header />
    <div className="container mx-auto mt-5 flex flex-col md:flex-row items-center">
      <div className="max-w-md mx-auto md:max-w-2xl text-center">
        <h2 className="text-2xl text-[#000] font-bold mb-14 pb-2 border-b border-[#eca74e4f] flex flex-col md:flex-row md:items-center md:justify-center">
          <span >Welcome to Mono Rail </span>
          <span className="md:ml-2">
            <a
              href="#"
              className="text-[#eca74e] hover:text-[#149ddd] duration-500"
              rel="noreferrer"
            >
              
            </a>
          </span>
        </h2>

        <div className="md:flex">
          <div className="md:flex-shrink-0">
            <img
              src="https://i.imgur.com/ilDN4RY.png"
              alt="Train_image"
              className="w-48 h-48 md:h-full md:w-64 mx-auto"
            />
          </div>
          <div className="p-8 md:mt-8">
            <div className="uppercase tracking-wide text-sm  font-semibold cursor-default">
              Train Coach: A1
            </div>
            <p className="block mt-1 text-lg leading-tight font-medium text-black hover:underline cursor-default">
              Train : Kharghar Express
            </p>
            <p className="mt-2 ">
              Juhu <i className="fa-solid fa-arrow-right mx-2"></i> Kharghar
            </p>
            <p>Price: ₹ 101</p>
          </div>
        </div>
        {errorMessage && (
          <div className="text-red-500 mt-2">{errorMessage}</div>
        )}
        <input
          className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mt-5"
          id="numSeats"
          type="number"
          placeholder="Enter number of seats you want to book"
          min="1"
          max="7"
          value={numSeats}
          onChange={handleInputChange}
        />
        <div className="flex justify-between items-center">
          <button
            className="bg-[#eca74e] hover:bg-[#ee5e5f] duration-200 text-white font-bold py-2 px-4 rounded mt-5 mr-4 mx-auto block"
            onClick={handleBookSeats}
          >
            Book Seats
          </button>
          
        </div>

        <div className="flex justify-between items-center">
          <button
            className="bg-[#eca74e] hover:bg-[#ee5e5f] duration-200 text-white font-bold py-2 px-4 rounded mt-5 mr-4 mx-auto block"
            onClick={resetPage}
          >
            Reset Seat
          </button>
          
        </div>
      </div>
      <div className=" mx-auto w-1/2 md:ml-5 mt-5 md:mt-0 ">
        <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden mb-5">
          <div className="px-6 py-4 bg-dark text-light">
            <div className="grid grid-cols-2 gap-2">
              <div className="flex justify-center items-center " >
                <i className="fa-solid fa-couch text-green-500"></i>
                <span className="ml-2 text-sm">Available</span>
              </div>
              <div className="flex items-center">
                <i className="fa-solid fa-couch text-red-500"></i>
                <span className="ml-2 text-sm">Booked</span>
              </div>
            </div>
          </div>
        </div>
        <div className=" mx-auto bg-dark text-light rounded-xl shadow-md overflow-hidden">
          <div className="px-6 py-4">
            <div className="grid grid-cols-7 gap-2 justify-center text-center">
              {trainData.coach.seats.map((seat) => (
                <div key={seat.number}>
                  {seat.isBooked ? (
                    <i className="fa-solid fa-couch text-red-500"></i>
                  ) : (
                    <i className="fa-solid fa-couch text-green-500"></i>
                  )}
                  <div className="text-sm">{seat.number}</div>
                </div>
              ))} c``
            </div>
          </div>
        </div>
      </div>
      
    </div>
    {/* <Footer></Footer> */}
  </>
  );
};

export default Main;
