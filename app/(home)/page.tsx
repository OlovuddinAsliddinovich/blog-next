"use client";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import React, { use, useEffect, useState } from "react";

interface Blog {
  id: number;
  title: string;
  content: string;
}

export default function HomePage() {
  const [isLoaded, setIsLoaded] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    setIsLoaded(true);
    const data = async () => {
      setLoading(true);
      try {
        console.log("ishladi");
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    data();
  }, []);

  return (
    <div className="min-h-screen w-full mt-8">
      <div className="container mx-auto flex flex-col space-y-8 items-start">
        <section className="flex items-center justify-between w-full">
          <h1 className="text-2xl font-bold">All blogs</h1>

          <div className="flex items-center gap-4">
            <input
              type="text"
              placeholder="Search..."
              className="border w-[400px] h-[40px] rounded-[4px] focus:outline-none px-2 border-blue-500 shadow-lg shadow-[rgba(0,0,0,0.1)]"
            />
            <Button
              variant={"default"}
              className="w-[100px] h-[40px] cursor-pointer"
            >
              Search
            </Button>
          </div>
        </section>

        {loading ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 w-full">
            {Array.from({ length: 6 }).map((item, idx) => (
              <div key={idx} className="w-full rounded-md overflow-hidden">
                <div className="w-full h-[300px] border animate-pulse bg-gray-300" />

                <div className="w-full h-[20px] mt-2 border animate-pulse bg-gray-300" />

                <div className="w-full h-[20px] mt-2 border animate-pulse bg-gray-300" />
              </div>
            ))}
          </div>
        ) : (
          <section className="w-full">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 w-full">
              {blogs.map((blog: Blog) => (
                <div key={blog.id} className="w-full h-auto">
                  <div className="overflow-hidden relative rounded-sm w-full h-[300px]">
                    <Image
                      src="/images/blog1.jpeg"
                      alt="Custom blur orqali yuklanadigan rasm"
                      fill
                      className={`z-10 object-cover transition-all hover:scale-110 duration-700 ease-in-out ${
                        isLoaded ? "blur-0 scale-100" : "blur-lg scale-110"
                      }`}
                      onLoadingComplete={() => setIsLoaded(true)}
                    />
                  </div>
                  <h2 className="py-2 line-clamp-2 text-[20px] font-bold md:text-[24px]">
                    {blog.title}
                  </h2>
                  <p className="line-clamp-3">{blog.content}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        <section className="flex items-center justify-between w-full h-fit mb-3">
          {loading ? (
            <div className="w-full flex items-center gap-6 justify-between">
              <div className="w-full">
                <div className="w-full h-[20px] border animate-pulse bg-gray-300" />

                <div className="w-full h-[70px] mt-2 border animate-pulse bg-gray-300" />
              </div>
              <div className="w-full">
                <div className="w-full h-[400px] border animate-pulse bg-gray-300" />
              </div>
            </div>
          ) : (
            <>
              <div className="w-full h-auto">
                <div className="text-2xl font-bold">About me</div>
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Sapiente excepturi ea inventore corrupti ad odit perferendis,
                  accusamus, tenetur minima impedit quae provident voluptates
                  fuga ex necessitatibus, animi illo! Eligendi, tempore.
                  Incidunt natus, eligendi eveniet ab quod nostrum harum quas
                  labore? Modi quis explicabo tempora ut quia quaerat et
                  aperiam, iste eveniet maiores repudiandae, dolorum eum! Minus
                  doloribus facere ab quis. Quidem iste officia praesentium
                  dignissimos ipsa est sed recusandae veniam aperiam voluptas,
                  sint ratione, doloribus necessitatibus provident nulla ad quia
                  sequi voluptate natus sapiente repellendus corrupti! Modi odio
                  corporis minima!
                </p>
              </div>

              <div className="h-[400px] w-full relative overflow-hidden rounded-md">
                <Image
                  src="/images/blog1.jpeg"
                  fill
                  priority
                  alt="Blog Image"
                  className={`z-10 hover:scale-110 object-cover transition-all duration-700 ease-in-out ${
                    isLoaded ? "blur-0 scale-100" : "blur-lg scale-110"
                  }`}
                />
              </div>
            </>
          )}
        </section>
      </div>
    </div>
  );
}

const blogs = [
  {
    id: 1,
    title: "Blog 1",
    content: "Content of blog 1",
  },
  {
    id: 2,
    title: "Blog 2",
    content: "Content of blog 2",
  },
  {
    id: 3,
    title: "Blog 3",
    content: "Content of blog 3",
  },
  {
    id: 4,
    title: "Blog 4",
    content: "Content of blog 4",
  },
  {
    id: 5,
    title: "Blog 5",
    content: "Content of blog 5",
  },
  {
    id: 6,
    title: "Blog 6",
    content: "Content of blog 6",
  },
];
