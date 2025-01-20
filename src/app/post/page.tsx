import React from "react";

const page = () => {
  return (
    <div>
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="max-w-lg mt-24 w-full bg-white rounded-lg shadow-md p-6">
          <h1 className="text-2xl font-bold text-gray-800 text-center mb-4">
            Create a New Post
          </h1>
          <form>
            <div className="mb-4">
              <label
                htmlFor="title"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Title
              </label>
              <input
                id="title"
                type="text"
                placeholder="Enter the post title"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="content"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Content
              </label>
              <textarea
                id="content"
                placeholder="Write your post content here"
                rows={5}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              ></textarea>
            </div>
            <div className="mb-4">
              <label
                htmlFor="status"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Status
              </label>
              <select
                id="status"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="draft">Borrador</option>
                <option value="published">Publicado</option>
              </select>
            </div>
            <div className="flex justify-end">
              <button
                type="submit"
                className="px-6 py-2 text-white bg-blue-600 hover:bg-blue-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                Create Post
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default page;
