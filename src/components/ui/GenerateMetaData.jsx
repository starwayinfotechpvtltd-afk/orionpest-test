import { useData } from "@/context/DataContext";

export async function GenerateMetaData(slug) {

    const { data, loading } = useData();
    
      const currentPage = data?.find((page) => page.slug === segment);
      console.log(currentPage)
  try {
    return {
      title: currentPage.metaTitle || "",
      description: page?.metaDescription || "",
    };
  } catch (error) {
    return { title: slug, description: "" };
  }
}
