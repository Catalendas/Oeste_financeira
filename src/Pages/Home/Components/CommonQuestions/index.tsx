import * as Accordion from '@radix-ui/react-accordion'
import { AccordionContent, AccordionItem, AccordionRoot, AccordionTrigger, CommonQuestionsContainer } from './styled'

export function CommonQuestions() {
    return (
        <CommonQuestionsContainer className='container'>
            asdsadasdasdadasdas 
            <AccordionRoot type="single" defaultValue="item-1" collapsible>
                <AccordionItem value="item-1">
                    <AccordionTrigger>Is it accessible?</AccordionTrigger>
                    <AccordionContent>Yes. It adheres to the WAI-ARIA design pattern.</AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-2">
                    <AccordionTrigger>Is it unstyled?</AccordionTrigger>
                    <AccordionContent>
                        Yes. It's unstyled by default, giving you freedom over the look and feel.
                    </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-3">
                    <AccordionTrigger>Can it be animated?</AccordionTrigger>
                    <AccordionContent>
                        <div >
                        Yes! You can animate the Accordion with CSS or JavaScript.
                        </div>
                    </AccordionContent>
                </AccordionItem>
            </AccordionRoot>
        </CommonQuestionsContainer>
    )
}