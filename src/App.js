import HeadWrapper from "./components/headWrapper";
import QuestWrapper from "./components/quesWrapper";
import SubmitArea from "./components/submitArea";
import Footer from "./components/footer";
import { HiOutlineUpload } from "react-icons/hi"

function App() {
  return (
    <div className="App">
      <div className="formArea">
        <HeadWrapper />

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

        <QuestWrapper quesTitle="Short Answer" required={true}>
          <div className="shortAns">
            <input type="text" placeholder="Your Answer"/>
          </div>
        </QuestWrapper>
        
        <QuestWrapper quesTitle="ParaGraph" required={true}>
          <div className="paraAns">
            <textarea type="" placeholder="Your Answer"/>
          </div>
        </QuestWrapper>

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

        <QuestWrapper quesTitle="File Upload" required={true}>
          <div>
            <label class="custom-file-upload">
                <HiOutlineUpload />
                <input type="file"/>
                Add File
            </label>
          </div>
        </QuestWrapper>

        <QuestWrapper quesTitle="Linear Scale" required={true}>
          <div className="linearScale">
              <div class="linearScaleItem"></div>
              <div class="linearScaleItem">1</div>
              <div class="linearScaleItem">2</div>
              <div class="linearScaleItem">3</div>
              <div class="linearScaleItem">4</div>
              <div class="linearScaleItem">5</div>
              <div class="linearScaleItem"></div>
            </div>
            <div className="linearScale">
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

        <QuestWrapper quesTitle="Multi choice Grid" required={true}>
          <div className="linearScale">
              <div class="linearScaleItem"></div>
              <div class="linearScaleItem">Column 1</div>
              <div class="linearScaleItem">Column 2</div>
              <div class="linearScaleItem">Column 3</div>
            </div>
            <div className="multiScale">
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

            <div className="multiScale">
              <div>Row 2</div>
              <div class="linearScaleItem">
                <input type="radio" value="1" name="MultiRadioBtn2" />
              </div>
              <div class="linearScaleItem">
                <input type="radio" value="2" name="MultiRadioBtn2" />
              </div>
              <div class="linearScaleItem">
                <input type="radio" value="3" name="MultiRadioBtn2" />
              </div>
            </div>

            <div className="multiScale">
              <div>Row 3</div>
              <div class="linearScaleItem">
                <input type="radio" value="1" name="MultiRadioBtn3" />
              </div>
              <div class="linearScaleItem">
                <input type="radio" value="2" name="MultiRadioBtn3" />
              </div>
              <div class="linearScaleItem">
                <input type="radio" value="3" name="MultiRadioBtn3" />
              </div>
            </div>
        </QuestWrapper>

        <QuestWrapper quesTitle="Tick box Grid" required={true}>
          <div className="linearScale">
              <div class="linearScaleItem"></div>
              <div class="linearScaleItem">Column 1</div>
              <div class="linearScaleItem">Column 2</div>
              <div class="linearScaleItem">Column 3</div>
            </div>
            <div className="multiScale">
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

            <div className="multiScale">
              <div>Row 2</div>
              <div class="linearScaleItem">
                <input type="checkbox" value="1" name="radioBtnGrid2" />
              </div>
              <div class="linearScaleItem">
                <input type="checkbox" value="2" name="radioBtnGrid2" />
              </div>
              <div class="linearScaleItem">
                <input type="checkbox" value="3" name="radioBtnGrid2" />
              </div>
            </div>

            <div className="multiScale">
              <div>Row 3</div>
              <div class="linearScaleItem">
                <input type="checkbox" value="1" name="radioBtnGrid3" />
              </div>
              <div class="linearScaleItem">
                <input type="checkbox" value="2" name="radioBtnGrid3" />
              </div>
              <div class="linearScaleItem">
                <input type="checkbox" value="3" name="radioBtnGrid3" />
              </div>
            </div>
        </QuestWrapper>

        <SubmitArea />

        <Footer />
      </div>
    </div>
  );
}

export default App;
