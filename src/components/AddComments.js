import { color } from "@mui/system"
import { useContext } from "react"
import { Col, Form, Button, Row } from "react-bootstrap"
import CitiesContext from "../utils/CitiesContext"

function AddComment(props) {
  const { addComment } = useContext(CitiesContext)
  const { placeId } = props
  return (
    <div className="ms-4">
      <Row>
        <Col  md="10" className="mx-auto"> 
      <h1 className="textComment2" >Add Comment</h1>
      <Form className="mt-5" onSubmit={e => addComment(e, placeId)}>
        <Form.Group as={Row} className="mb-3">
          <Form.Label column md="2">
            Comment
          </Form.Label>
          <Col md="6">
            <Form.Control as="textarea" name="comment" required />
          </Col>
        </Form.Group>

        <Form.Group as={Row} className="my-4">
          <Col md={{ span: 10, offset: 2 }}>
            <Button  className="textComment2" type="submit">Add</Button>
          </Col>
        </Form.Group>
      </Form>
      </Col>
      </Row>
    </div>
  )
}

export default AddComment
