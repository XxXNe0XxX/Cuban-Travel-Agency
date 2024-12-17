const data = [
  {
    title: "Exploring the Streets of Havana",
    author: "Ana Garcia",
    date_published: "2024-04-15",
    content:
      "Havana, the vibrant capital of Cuba, is known for its colorful streets, historic buildings, and lively culture. In this post, we'll explore the must-see sights and hidden gems of this fascinating city.",
    tags: ["Travel", "Havana", "Culture", "Sightseeing"],
    image_url: "./src/assets/imagen-cuba-6.jpg",
    comments: [
      {
        user: "JohnDoe",
        comment: "Great post! I can't wait to visit Havana.",
        date: "2024-04-16",
      },
      {
        user: "TravelLover",
        comment: "Thanks for the tips! This will help me plan my trip.",
        date: "2024-04-17",
      },
    ],
  },
  {
    title: "A Guide to Santiago de Cuba",
    author: "Luis Perez",
    date_published: "2024-03-20",
    content:
      "Santiago de Cuba is known for its rich history and cultural heritage. From the historic fortress of San Pedro de la Roca to the lively Carnival celebrations, there's so much to discover in this eastern Cuban city.",
    tags: ["Travel", "Santiago de Cuba", "History", "Culture"],
    image_url: "./src/assets/imagen-cuba-5.jpg",
    comments: [
      {
        user: "HistoryBuff",
        comment: "Santiago de Cuba has so much history! Can't wait to explore.",
        date: "2024-03-21",
      },
      {
        user: "CultureSeeker",
        comment: "The Carnival sounds amazing! Thanks for sharing.",
        date: "2024-03-22",
      },
    ],
  },
  {
    title: "Top Attractions in Camagüey",
    author: "Maria Lopez",
    date_published: "2024-02-10",
    content:
      "Camagüey is a city of winding streets and beautiful plazas. In this post, we'll highlight the top attractions you shouldn't miss when visiting Camagüey.",
    tags: ["Travel", "Camagüey", "Attractions"],
    image_url: "./src/assets/imagen-cuba-4.jpg",
    comments: [
      {
        user: "AdventureTraveler",
        comment: "Camagüey looks so charming! Thanks for the recommendations.",
        date: "2024-02-11",
      },
      {
        user: "PhotoEnthusiast",
        comment: "Great photo spots in Camagüey! Can't wait to visit.",
        date: "2024-02-12",
      },
    ],
  },
  {
    title: "Discovering Holguín: The City of Parks",
    author: "Carlos Martinez",
    date_published: "2024-01-05",
    content:
      "Holguín is often called the 'City of Parks' because of its many beautiful green spaces. In this blog post, we'll take you on a tour of Holguín's best parks and outdoor attractions.",
    tags: ["Travel", "Holguín", "Parks", "Nature"],
    image_url: "./src/assets/imagen-cuba-3.jpg",
    comments: [
      {
        user: "NatureLover",
        comment: "Holguín's parks are beautiful! Thanks for the tour.",
        date: "2024-01-06",
      },
      {
        user: "GreenSpacesFan",
        comment: "I love visiting parks. Holguín is now on my list!",
        date: "2024-01-07",
      },
    ],
  },
  {
    title: "Unveiling the Charm of Santa Clara",
    author: "Elena Fernandez",
    date_published: "2023-12-15",
    content:
      "Santa Clara is a city with a rich revolutionary history and a vibrant cultural scene. Join us as we uncover the charm of Santa Clara and its most iconic landmarks.",
    tags: ["Travel", "Santa Clara", "History", "Culture"],
    image_url: "./src/assets/imagen-cuba-2.jpg",
    comments: [
      {
        user: "HistoryFan",
        comment: "Santa Clara's history is fascinating. Great read!",
        date: "2023-12-16",
      },
      {
        user: "CultureVulture",
        comment: "Loved learning about Santa Clara's culture. Thanks!",
        date: "2023-12-17",
      },
    ],
  },
  {
    title: "Cienfuegos: The Pearl of the South",
    author: "Roberto Diaz",
    date_published: "2023-11-10",
    content:
      "Cienfuegos, known as the Pearl of the South, boasts beautiful architecture and a picturesque bay. In this post, we'll explore the top sights and experiences in Cienfuegos.",
    tags: ["Travel", "Cienfuegos", "Architecture", "Bay"],
    image_url: "./src/assets/imagen-cuba-1.jpg",
    comments: [
      {
        user: "ArchitectureLover",
        comment: "Cienfuegos looks stunning! Can't wait to visit.",
        date: "2023-11-11",
      },
      {
        user: "BayExplorer",
        comment: "The bay sounds so peaceful. Thanks for the insights!",
        date: "2023-11-12",
      },
    ],
  },
];

const Blog = () => {
  return (
    <>
      <h1 className="text-center font-cursive text-green-600 text-8xl p-10">
        Share your experiences
      </h1>
      <section className="flex justify-center">
        <ul className="flex flex-col gap-10">
          {data.map((each) => {
            return (
              <li className="overflow-hidden transition-all rounded-lg hover:outline-1 hover:outline-slate-500 hover:outline flex  h-48 md:w-screen max-w-[800px] m-auto  *:tracking-tight">
                <div className="w-[80%] p-2">
                  <h1 className=" font-semibold text-lg">{each.title}</h1>
                  <div className="flex gap-2 px-2">
                    <p className="text-sm font-sans text-gray-700">
                      {each.author}
                    </p>
                    <span className="text-sm  font-semibold text-gray-400">
                      {each.date_published}
                    </span>
                  </div>
                  <div className="bg-gray-300 h-[1px] m-auto my-2"></div>
                  <p className="p-1 ">{each.content}</p>
                  <ul className="flex px-2 justify-end text-sm text-green-500 gap-2 ">
                    {each.tags.map((each) => {
                      return <li>#{each}</li>;
                    })}
                  </ul>
                </div>

                <div className="w-[20%] relative transition-all bg-black flex ">
                  {each.image_url ? (
                    <img
                      className="object-cover  transition-all w-full h-full"
                      src={each.image_url}
                    ></img>
                  ) : (
                    <p>No image to display</p>
                  )}
                </div>
              </li>
            );
          })}
        </ul>
      </section>
    </>
  );
};

export default Blog;
