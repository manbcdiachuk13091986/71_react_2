import AnimalCard from "../../components/AnimalCard/AnimalCard";
import Button from "../../components/Button/Button";
import "./styles.css";
import { lionData, zebraData, hippoData } from "./data";

function Lesson03() {
  return (
    <div className="lesson03-wrapper">
      <Button namne="Send" type="submit" />
      <Button namne="Get" type="button" />
      <AnimalCard
        animalName={lionData.namne}
        animalSpecies={lionData}
        animalImg={lionData.image}
        >
          <p>Main character</p>
          
          </AnimalCard>
        <AnimalCard
        animalName={zebraData.name}
        animalSpecies={zebraData}
        animalImg={zebraData.image}
        />
        <AnimalCard
        animalName={hippoData.namne}
        animalSpecies={hippoData}
        animalImg={hippoData.image}
      />
    </div>
  );
}

export default Lesson03;
