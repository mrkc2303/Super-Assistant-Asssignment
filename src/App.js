import React from "react";
import HeadWrapper from "./components/headWrapper"; // Import component: HeadWrapper
import QuestWrapper from "./components/quesWrapper"; // Import component: QuestWrapper
import SubmitArea from "./components/submitArea"; // Import component: SubmitArea
import Footer from "./components/footer"; // Import component: Footer
import { HiOutlineUpload } from "react-icons/hi"; // Import react-icons component

function App() {
  return (
    <div className="App">
      <div className="formArea">
        {/* HeadWrapper component */}
        <HeadWrapper />

        {/* Question Wrapper for MCQ */}
        <QuestWrapper quesTitle="MCQ" required={true}>
          <div>
            <input type="radio" value="Option 1" name="radioBtn" /> Option 1
          </div>
          <div>
            <input type="radio" value="Option 2" name="radioBtn" /> Option 2
          </div>
          <div>
            <input type="radio" value="Option 3" name="radioBtn" /> Option 3
          </div>
        </QuestWrapper>

        {/* Question Wrapper for Checkbox */}
        <QuestWrapper quesTitle="Checkbox" required={true}>
          <div>
            <input type="checkbox" value="Option 1" name="checkBtn" /> Option 1
          </div>
          <div>
            <input type="checkbox" value="Option 2" name="checkBtn" /> Option 2
          </div>
          <div>
            <input type="checkbox" value="Option 3" name="checkBtn" /> Option 3
          </div>
        </QuestWrapper>

        {/* Other question wrappers for different question types */}
        {/* Short Answer */}
        <QuestWrapper quesTitle="Short Answer" required={true}>
          <div className="shortAns">
            <input type="text" placeholder="Your Answer"/>
          </div>
        </QuestWrapper>
        
        {/* Paragraph */}
        <QuestWrapper quesTitle="ParaGraph" required={true}>
          <div className="paraAns">
            <textarea type="" placeholder="Your Answer"/>
          </div>
        </QuestWrapper>

        {/* Drop Down */}
        <QuestWrapper quesTitle="Drop Down" required={true}>
          <div>
            <select name="dropdownOptions" id="dropdownOptions">
              <option value="choose" selected disabled>Choose</option>
              <option value="option1">Option 1</option>
              <option value="option2">Option 2</option>
              <option value="option3">Option 3</option>
            </select>
          </div>
        </QuestWrapper>

        {/* File Upload */}
        <QuestWrapper quesTitle="File Upload" required={true}>
          <div>
            <label class="custom-file-upload">
                <HiOutlineUpload />
                <input type="file"/>
                Add File
            </label>
          </div>
        </QuestWrapper>

        {/* Linear Scale */}
        <QuestWrapper quesTitle="Linear Scale" required={true}>
          <div className="linearScale">
              {/* Linear scale items */}
              <div class="linearScaleItem"></div>
              <div class="linearScaleItem">1</div>
              <div class="linearScaleItem">2</div>
              <div class="linearScaleItem">3</div>
              <div class="linearScaleItem">4</div>
              <div class="linearScaleItem">5</div>
              <div class="linearScaleItem"></div>
            </div>
            <div className="linearScale">
              {/* Linear scale labels and radio buttons */}
              <div class="linearScaleItem">Worst</div>
              <div class="linearScaleItem">
                <input type="radio" value="1" name="linearRadioBtn" />
              </div>
              <div class="linearScaleItem">
                <input type="radio" value="2" name="linearRadioBtn" />
              </div>
              <div class="linearScaleItem">
                <input type="radio" value="3" name="linearRadioBtn" />
              </div>
              <div class="linearScaleItem">
                <input type="radio" value="4" name="linearRadioBtn" />
              </div>
              <div class="linearScaleItem">
                <input type="radio" value="5" name="linearRadioBtn" />
              </div>
              <div class="linearScaleItem">Best</div>
            </div>
        </QuestWrapper>

        {/* Multi-choice Grid */}
        <QuestWrapper quesTitle="Multi choice Grid" required={true}>
          <div className="linearScale">
              {/* Column labels */}
              <div class="linearScaleItem"></div>
              <div class="linearScaleItem">Column 1</div>
              <div class="linearScaleItem">Column 2</div>
              <div class="linearScaleItem">Column 3</div>
            </div>
            <div className="multiScale">
              {/* Row labels and radio buttons */}
              <div>Row 1</div>
              <div class="linearScaleItem">
                <input type="radio" value="1" name="MultiRadioBtn1" />
              </div>
              <div class="linearScaleItem">
                <input type="radio" value="2" name="MultiRadioBtn1" />
              </div>
              <div class="linearScaleItem">
                <input type="radio" value="3" name="MultiRadioBtn1" />
              </div>
            </div>

            {/* We Can Add Other rows over here */}
            {/* ... */}
        </QuestWrapper>

        {/* Tick box Grid */}
        <QuestWrapper quesTitle="Tick box Grid" required={true}>
          <div className="linearScale">
              {/* Column labels */}
              <div class="linearScaleItem"></div>
              <div class="linearScaleItem">Column 1</div>
              <div class="linearScaleItem">Column 2</div>
              <div class="linearScaleItem">Column 3</div>
            </div>
            <div className="multiScale">
              {/* Row labels and checkboxes */}
              <div>Row 1</div>
              <div class="linearScaleItem">
                <input type="checkbox" value="1" name="radioBtnGrid1" />
              </div>
              <div class="linearScaleItem">
                <input type="checkbox" value="2" name="radioBtnGrid1" />
              </div>
              <div class="linearScaleItem">
                <input type="checkbox" value="3" name="radioBtnGrid1" />
              </div>
            </div>

            {/* We Can Add Other rows over here */}
            {/* ... */}
        </QuestWrapper>

        {/* Submit Area */}
        <SubmitArea />

        {/* Footer */}
        <Footer />
      </div>
    </div>
  );
}

export default App;