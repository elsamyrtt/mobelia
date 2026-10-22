import DiningRoomPhoto from "@/public/image.jpeg";

export type GalleryProject = {
    id: string;
    title: string;
    description: string;
    image: typeof DiningRoomPhoto;
    imageAlt: string;
    categories: string[];
    published: boolean;
    order: number;
};

export const galleryProjects: GalleryProject[] = [
    {
        id: "comedor-mobiliario-madera",
        title: "Comedor con mobiliario de madera",
        description: "Vista de un comedor amoblado con mesas y sillas de madera.",
        image: DiningRoomPhoto,
        imageAlt: "Mesas y sillas de madera dispuestas en un comedor",
        categories: ["Comedor", "Mobiliario"],
        published: true,
        order: 1,
    },
].filter((project) => project.published).sort((a, b) => a.order - b.order);
