import Link from 'next/link'

interface ProjectCardProps {
  link: string
  title: string
  createdDate: string
  hostingSite: string
}

export default function ProjectCard({ link, title, createdDate, hostingSite }: ProjectCardProps) {
  return (
    <div className="card shadow-lg transform transition duration-500 hover:scale-105">
      <div className="card-header bg-gray-100 py-2 flex justify-between items-center">
        <span>::</span>
      </div>
      <Link href={link} className="text-decoration-none">
        <iframe src={link} className="w-full h-48 border-none" title="Website Preview" />
        <div className="p-4">
          <h3 className="text-xl font-semibold">{title}</h3>
          <p className="text-gray-600">Created Date: {createdDate}</p>
          <p className="text-gray-600">Hosting Site: {hostingSite}</p>
          <button className="w-full mt-2 bg-gray-800 text-white py-2 rounded hover:bg-gray-700 transition-colors">
            Visit Website
          </button>
        </div>
      </Link>
    </div>
  )
}

