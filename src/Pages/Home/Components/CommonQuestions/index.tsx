import { AccordionContent, AccordionItem, AccordionRoot, AccordionTrigger, CommonQuestionsContainer, CommonQuestionsContent} from './styled'
import girl from "../../../../assets/girlquestion.png"

export function CommonQuestions() {
    return (
        <CommonQuestionsContainer>
            <h2>Duvidas Frequentes</h2>
            <CommonQuestionsContent>
                <div>
                    <AccordionRoot type="single" defaultValue="item-1" collapsible>
                        <AccordionItem value="item-1">
                            <AccordionTrigger>Is it accessible?</AccordionTrigger>
                            <AccordionContent>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus fuga magnam saepe, quaerat ab nulla nostrum neque magni! Tempora facere magni ullam? Quidem sapiente aut cum dolor. Ipsa, nam laudantium!</AccordionContent>
                        </AccordionItem>

                        <AccordionItem value="item-2">
                            <AccordionTrigger>Is it unstyled?</AccordionTrigger>
                            <AccordionContent>
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad error officiis rem. Provident soluta repellendus iure totam dolores atque, eveniet aspernatur voluptatibus ipsum libero perspiciatis quae fugiat voluptas illum minus!
                            </AccordionContent>
                        </AccordionItem>

                        <AccordionItem value="item-3">
                            <AccordionTrigger>Can it be animated?</AccordionTrigger>
                            <AccordionContent>
                                <div >
                                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Autem placeat ex dolorem distinctio ipsum maxime neque quo praesentium molestiae magnam facilis numquam iusto est, odio aperiam accusamus rerum, ea sunt!
                                </div>
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-4">
                            <AccordionTrigger>Can it be animated?</AccordionTrigger>
                            <AccordionContent>
                                <div >
                                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Autem placeat ex dolorem distinctio ipsum maxime neque quo praesentium molestiae magnam facilis numquam iusto est, odio aperiam accusamus rerum, ea sunt!
                                </div>
                            </AccordionContent>
                        </AccordionItem>
                    </AccordionRoot>        
                </div>

            
                <div>
                            <img src={girl}/>
                </div>
            </CommonQuestionsContent>
          
        </CommonQuestionsContainer>
    )
}