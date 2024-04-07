import "../../../globals.css";
import Header from "../../components/SharedPage/Header";
import Input from "../../components/SharedPage/Input";
import Card from "../../components/SharedPage/Card";
import Footer from "../../components/SharedPage/Footer";
import { useFetch } from "../../api/useSharedFetch";
import { SAMPLE_API_URL } from "../../constants/url.constant";

export type UserType = {
  id: number;
  name: string;
  email: string;
  profileImageSource: string;
};
export interface FolderData {
  folder: Folder;
}

export interface Folder {
  id: number;
  name: string;
  owner: Owner;
  links: Links[];
  count: number;
}

export interface Links {
  id: number;
  createdAt: Date;
  url: string;
  title: string;
  description: string;
  imageSource?: string;
}

export interface Owner {
  id: number;
  name: string;
  profileImageSource: string;
}
export async function SharedPage(): Promise<React.ReactElement> {
  const userData = await useFetch(SAMPLE_API_URL.USER);
  const folderData = await useFetch(SAMPLE_API_URL.FOLDER);

  console.log(userData);
  console.log(folderData);

  return (
    <div className="App">
      <Header
        user={userData}
        folderName={folderData?.folder ? folderData.folder.name : null}
        owner={folderData?.folder ? folderData.folder.owner : null}
      />
      <Input />
      <Card links={folderData?.folder?.links || []} />
      <Footer />
    </div>
  );
}

export default SharedPage;
