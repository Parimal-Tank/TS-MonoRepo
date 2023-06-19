export interface BannerProps {
    text: string
}

export const Banner = (props: BannerProps) => {
    return (
        <div>
            {props.text}
        </div>
    )
}

export default Banner