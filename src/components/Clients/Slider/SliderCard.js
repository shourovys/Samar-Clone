import React from "react";
import pic4 from "../../../images/slideImg/pic4.jpg";
import {
  SliderCard,
  SliderCardContainer,
  SliderCardImgWrapper
} from "./SliderCard.styles";

const SliderCards = () => {
  return (
    <SliderCardContainer>
      <SliderCard>
        <SliderCardImgWrapper>
          <img src={pic4} />
          <i class="fas fa-quote-right"></i>
        </SliderCardImgWrapper>

        <div>
          <p>
            Nullam et velit mollis, dictum eros a, vehicula turpis. Aenean
            feugiat congue faucibus. Nullam dapibus ex ex, vulputate gravida
            nisi mattis in. Duis maximus odio sed turpis vehicula auctor sit
            amet ut urna. Nam non libero ut ex fermentum consectetur et in
            dolor. Morbi tempor gravida diam nec lacinia. Suspendisse vehicula
            ultricies arcu.
          </p>
          <h2 class="left">
            <span>Halana pip</span>
          </h2>
        </div>
      </SliderCard>
    </SliderCardContainer>
  );
};

export default SliderCards;
