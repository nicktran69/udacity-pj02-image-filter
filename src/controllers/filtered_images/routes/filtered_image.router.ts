import { Router, Request, Response } from 'express';

const router: Router = Router();

router.get('/',
    async (req: Request, res: Response) => {
        
        res.status(201).send("Get all RC 200 Success");
});

//get an image from a public url.
router.get('/:id',
    async (req: Request, res: Response) => {
        //@TODO try it yourself
        res.send("try GET /filteredimage?image_url={{}}")
        res.status(201).send("RC 200 Success");
});

export const FilteredImageRouter: Router = router;
