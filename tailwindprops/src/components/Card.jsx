import React from 'react'

function Card(props) {
  return (
    <>
    <h1>{props.name}</h1>
    <a href="#" className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
      <img className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg" src="https://dfstudio-d420.kxcdn.com/wordpress/wp-content/uploads/2019/06/digital_camera_photo-1080x675.jpg" alt="" />
      <div className="flex flex-col justify-between p-4 leading-normal">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{props.channel}</h5>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore animi voluptate illo voluptatibus unde. Officiis, praesentium esse! Adipisci, maiores saepe?</p>
      </div>
    </a>
    </>
  )
}

export default Card


function toSnakeCase(str) {
  return str.replace(/([A-Z])/g, "_$1").toLowerCase();
}

function convertToSnakeCase(obj) {
  if (Array.isArray(obj)) {
    return obj.map(convertToSnakeCase);
  } else if (typeof obj === 'object' && obj !== null) {
    return Object.keys(obj).reduce((acc, key) => {
      const snakeKey = toSnakeCase(key);
      acc[snakeKey] = convertToSnakeCase(obj[key]); // Recursively process nested objects/arrays
      return acc;
    }, {});
  }
  return obj; // Return value as is if it's not an object or array
}

// Example usage
const obj = {
  firstName: 'John',
  lastName: 'Doe',
  contactDetails: {
    phoneNumber: '1233434343',
    emailAddress: 'john.doe@example.com'
  },
  hobbies: ['reading', 'travelling'],
  userInfo: {
    addresses: [
      { cityName: 'New York', zipCode: '10001' },
      { cityName: 'Los Angeles', zipCode: '90001' }
    ]
  }
};

const snakeCaseObj = convertToSnakeCase(obj);
console.log(snakeCaseObj);