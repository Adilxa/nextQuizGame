import { cookies } from "next/headers";
import { use } from "react";
import Link from "next/link";

const fetchData = () =>
    fetch('https://jsonplaceholder.typicode.com/todos', {
        cache: "no-store",
        next: { revalidate: 10 }
    }).then(response => response.json())

async function DashboardPage() {
    const data = await fetchData();


    return (
        <div>
            {data.map((item: any) => (
                <div key={item.id} className="mt-5 bg-red-500 p-5">
                    <Link href={`/dashboard/${item.id}`}>
                        <p>ID: {item.id}</p>
                        <p>Title: {item.title}</p>
                    </Link>
                </div>
            ))}
        </div>
    );
}


export default DashboardPage;