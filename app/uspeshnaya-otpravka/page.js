"use client"
import { useEffect } from 'react';
import Link from 'next/link';

const Page = () => {
    useEffect(() => {
        const hasReloaded = localStorage.getItem('hasReloaded');
        if (!hasReloaded) {
            localStorage.setItem('hasReloaded', true);
            window.location.reload();
        }
    }, []);

    return (
        <main className="pt-20 min-h-screen">
            <section>
                <div className="container mx-auto text-center flex flex-col justify-center items-center min-h-[80vh]">
                    <h1 className="text-5xl text-[#004C97]">Ваш запрос успешно отправлен!</h1>
                    <p className="mt-8">Мы вам перезвоним в ближайшее время.</p>
                    <div className="flex mt-10">
                        <Link href={`${process.env.NEXT_PUBLIC_BASE_URL}/`} className="mx-4 underline">
                            На главную
                        </Link>
                        <Link href={`${process.env.NEXT_PUBLIC_BASE_URL}/kontakty`} className="mx-4 underline">
                            Контакты
                        </Link>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default Page;


