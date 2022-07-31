import { Field, Form, Formik } from "formik";
import { useRouter } from "next/router";
import { useAppSelector } from "../../../hooks";
import { IUser } from "../../../interfaces/user";
import { commentPost } from "../../../pages/api/post/commentPost";
import { Box } from "../Box";
import { Button } from "../Button";
import { TextBox } from "../TextBox";
import { IBoxToComment } from "./interface";

export const BoxToComment = ({
    id,
    setComment
}: IBoxToComment) => {

    const user: IUser = useAppSelector((state) => state.user)

    return (
        
            <Formik
                initialValues={{
                    comment: ""
                }}
                onSubmit={(values, {resetForm}) => {
                    commentPost(id, {
                        cm_text: values.comment,
                        wr_displayName: user.displayName,
                        wr_photoURL: user.photoUrl
                    })
                    setComment(values.comment)
                    resetForm()
                }}
            >
                {() => {
                    return (
                        <Form>
                            <Box
                                flexDirection="column"
                                flex
                                justify="end"
                            >
                                <Field
                                    my="2"
                                    id="comment"
                                    name="comment"
                                    as={TextBox}
                                />
                                <Box
                                    flex
                                    justify="end"
                                >
                                    <Button
                                        width="fit"
                                        size="medium"
                                        type="submit"
                                    >
                                        Comentar
                                    </Button>
                                </Box>
                            </Box>
                        </Form>
                    )
                }}
            </Formik>
    )
}