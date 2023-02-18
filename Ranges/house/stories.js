import "./house.css";
import "./house";

export const createRange = ({
  // max = 100,
  // min = 0,
  // value = 50,
  // labelText = "longcat1",
}) => {
  const house = ` <div class="house" id="house" data-rooms="6">
      <div class="house-wings" data-flip-key="wings">
        <div class="house-left-wing">
          <div class="house-window"></div>
          <div class="house-window"></div>
          <div class="house-sparkle">
            <div class="house-sparkle-dots"></div>
          </div>
        </div>
        <div class="house-right-wing">
          <div class="house-window"></div>
          <div class="house-window"></div>
          <div class="house-sparkle">
            <div class="house-sparkle-dots"></div>
          </div>
        </div>
        <div class="house-roof">
          <div class="house-ledge"></div>
        </div>
      </div>
      <div class="house-front" data-flip-key="front">
        <div class="house-chimney"></div>
        <div class="house-facade"></div>
        <div class="house-window">
          <div class="house-sparkle">
            <div class="house-sparkle-dots"></div>
          </div>
        </div>
        <div class="house-doorway">
          <div class="house-stairs"></div>
          <div class="house-door"></div>
        </div>
        <div class="house-gable">
          <div class="house-roof">
            <div class="house-ledge"></div>
          </div>
        </div>
      </div>
    </div>`;

  return house;
};
